Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("c:\Users\SINCHANA\Desktop\Dispatchboard2\DispatchBoard_Engineering_Spec_v1.docx")
$entry = $zip.GetEntry("word/document.xml")
if ($entry -eq $null) { Write-Host "word/document.xml not found"; exit }
$reader = New-Object System.IO.StreamReader($entry.Open())
$xmlStr = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()

$xml = [xml]$xmlStr
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$paragraphs = $xml.SelectNodes("//w:p", $ns)
$text = @()
foreach ($p in $paragraphs) {
    if ($p -eq $null) { continue }
    $pText = ""
    $tNodes = $p.SelectNodes(".//w:t", $ns)
    if ($tNodes -ne $null) {
        foreach ($t in $tNodes) {
            $pText += $t.InnerText
        }
    }
    $text += $pText
}
Set-Content -Path "c:\Users\SINCHANA\Desktop\Dispatchboard2\docx_extracted.txt" -Value ($text -join "`n")
Write-Host "Extraction complete"
