module.exports = [
"[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hwviqrnajngjnfgmriat.supabase.co") ?? "";
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dmlxcm5ham5nam5mZ21yaWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyODIwODAsImV4cCI6MjA5MDg1ODA4MH0.hTjMXqT7D9aid-iY3BJV7SYPSvcvDBCXH8uBoIeCmNo") ?? "";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/src/components/Board.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Board",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ORDER_TEMPLATE = "50 TM-803-PLUS, 2 TM-801-TA for Shyam Sundar";
const ORDER_TEMPLATE_NOTE = "Use the template above and always reference the catalog SKU codes.";
const columns = [
    {
        key: "new",
        label: "New"
    },
    {
        key: "payment",
        label: "Payment"
    },
    {
        key: "fulfillment",
        label: "Fulfillment"
    },
    {
        key: "shipped",
        label: "Shipped"
    },
    {
        key: "done",
        label: "Done"
    }
];
const playNotificationTone = (frequency = 880)=>{
    if (("TURBOPACK compile-time value", "undefined") === "undefined" || !("AudioContext" in window)) return;
    //TURBOPACK unreachable
    ;
};
const sampleCards = [
    {
        id: "1",
        customer_name: "Ravi Electronics, Mumbai",
        priority: "urgent",
        status: "payment",
        payment_status: "pending",
        needs_review: false,
        items: [
            {
                product_name: "Product A",
                qty_ordered: 50
            },
            {
                product_name: "Product B",
                qty_ordered: 30
            }
        ]
    },
    {
        id: "2",
        customer_name: "Suresh Traders, Pune",
        priority: "normal",
        status: "fulfillment",
        payment_status: "paid",
        needs_review: false,
        items: [
            {
                product_name: "Product C",
                qty_ordered: 20
            }
        ]
    }
];
const statusOrder = [
    "new",
    "payment",
    "fulfillment",
    "shipped",
    "done"
];
const useOrders = (tvMode)=>{
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const hasSupabase = Boolean(("TURBOPACK compile-time value", "https://hwviqrnajngjnfgmriat.supabase.co") && ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dmlxcm5ham5nam5mZ21yaWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyODIwODAsImV4cCI6MjA5MDg1ODA4MH0.hTjMXqT7D9aid-iY3BJV7SYPSvcvDBCXH8uBoIeCmNo"));
    const loadOrders = async ()=>{
        if (!hasSupabase) {
            setOrders(sampleCards);
            setLoading(false);
            return;
        }
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("id, customer_id, channel, priority, status, payment_status, needs_review, notes, parent_order_id, suffix, created_at, customers(name), order_items(id, product_name, qty_ordered)").order("created_at", {
                ascending: false
            });
            if (error) {
                setOrders([]);
                setLoading(false);
                return;
            }
            const mapped = (data ?? []).map((order)=>({
                    id: order.id,
                    customer_name: order.customers?.name ?? "Unknown",
                    priority: order.priority,
                    status: order.status,
                    payment_status: order.payment_status,
                    needs_review: order.needs_review ?? false,
                    suffix: order.suffix ?? null,
                    notes: order.notes ?? null,
                    items: order.order_items ?? []
                }));
            setOrders(mapped);
        } catch  {
            setOrders([]);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadOrders();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasSupabase) return;
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel("orders");
        const handleOrderEvent = (payload)=>{
            loadOrders();
            if (payload.eventType === "INSERT" && payload.table === "orders") {
                const priority = payload.record?.priority;
                if (priority === "urgent") {
                    playNotificationTone(920);
                }
            }
        };
        channel.on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "orders"
        }, handleOrderEvent).on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "order_items"
        }, ()=>{
            loadOrders();
        }).subscribe();
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, [
        hasSupabase
    ]);
    // Realtime can intermittently miss events on free tiers; periodic refresh keeps board live.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasSupabase) return;
        const timer = window.setInterval(()=>{
            loadOrders();
        }, 15000);
        return ()=>window.clearInterval(timer);
    }, [
        hasSupabase
    ]);
    return {
        orders,
        loading,
        reload: loadOrders,
        hasSupabase
    };
};
const formatPayment = (status)=>status === "paid" ? "Credit - N/A" : "Payment Pending";
const getPriorityColor = (value)=>value === "urgent" ? "bg-accent text-white" : value === "high" ? "bg-steel text-white" : "bg-mint text-ink";
const canMoveForward = (order)=>order.status !== "done" && !(order.status === "payment" && order.payment_status !== "paid");
const nextStatus = (status)=>{
    const idx = statusOrder.indexOf(status);
    return statusOrder[Math.min(idx + 1, statusOrder.length - 1)];
};
const prevStatus = (status)=>{
    const idx = statusOrder.indexOf(status);
    return statusOrder[Math.max(idx - 1, 0)];
};
const emptyNewOrder = ()=>({
        customerName: "",
        channel: "direct",
        priority: "normal",
        paymentRequired: true,
        items: [
            {
                product_name: "",
                qty_ordered: 1
            }
        ],
        notes: ""
    });
const queueKey = "dispatchboard_queue";
const readQueue = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const raw = undefined;
};
const writeQueue = (actions)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
function OrderCard({ card, tvMode, onMoveBack, onMoveForward, onMarkPaid, onOpenFulfillment, onOpenHistory, onMarkReviewed, isAdmin, onDelete }) {
    const bindSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$use$2d$gesture$2f$react$2f$dist$2f$use$2d$gesture$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDrag"])(({ last, movement: [mx], swipe: [sx] })=>{
        if (!last || tvMode) return;
        if (sx === 1 || mx > 80) onMoveBack();
        if (sx === -1 || mx < -80) onMoveForward();
    }, {
        filterTaps: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...bindSwipe(),
        style: {
            touchAction: "pan-y"
        },
        className: "rounded-2xl border border-ink/10 bg-white p-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-ink/60",
                                children: card.suffix ? `${card.customer_name} - ${card.suffix}` : card.customer_name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-ink/50",
                                children: formatPayment(card.payment_status)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getPriorityColor(card.priority)}`,
                        children: card.priority
                    }, void 0, false, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "rounded-full border border-ink/10 px-2 py-1 text-[10px] font-semibold text-ink/60",
                    onClick: onDelete,
                    disabled: tvMode,
                    title: "Delete order",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-1 text-sm",
                children: card.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.product_name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    "x",
                                    item.qty_ordered
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.product_name, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            card.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-ink/50",
                children: [
                    "Notes: ",
                    card.notes
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 341,
                columnNumber: 21
            }, this) : null,
            card.needs_review ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 rounded-xl bg-accent/10 px-3 py-2 text-xs font-semibold text-accent",
                children: "Needs review"
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-col gap-2",
                children: [
                    card.needs_review ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                        onClick: onMarkReviewed,
                        disabled: tvMode,
                        children: "Mark reviewed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this) : null,
                    card.status === "payment" && card.payment_status !== "paid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white",
                        onClick: onMarkPaid,
                        disabled: tvMode,
                        children: "Mark as Paid"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this) : null,
                    card.status === "fulfillment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full rounded-xl border border-ink/10 bg-paper px-3 py-2 text-xs font-semibold",
                        onClick: onOpenFulfillment,
                        disabled: tvMode,
                        children: "Open Fulfillment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                        onClick: onOpenHistory,
                        children: "View shipments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full rounded-xl border border-ink/10 px-2 py-2 font-semibold",
                                onClick: onMoveBack,
                                disabled: card.status === "new" || tvMode,
                                children: "Move Back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full rounded-xl border border-ink/10 px-2 py-2 font-semibold",
                                onClick: onMoveForward,
                                disabled: !canMoveForward(card) || tvMode,
                                children: "Move Forward"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Board.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
function Board({ tvMode }) {
    const { orders, loading, reload, hasSupabase } = useOrders(tvMode);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fulfillment, setFulfillment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newOrder, setNewOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCustomers, setShowCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showRoles, setShowRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shipments, setShipments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [historyOrder, setHistoryOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [queued, setQueued] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [priorityFilter, setPriorityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [mappings, setMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMappings, setShowMappings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mappingForm, setMappingForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        marketplace: "",
        external_sku: "",
        product_name: ""
    });
    const [skuOptions, setSkuOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skuCatalog, setSkuCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skuFetchError, setSkuFetchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rawImport, setRawImport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const columnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skuListSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(skuOptions.map((value)=>value.toLowerCase())), [
        skuOptions
    ]);
    const invalidSkuItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!newOrder) return [];
        const invalid = new Set();
        newOrder.items.forEach((item)=>{
            const name = item.product_name.trim();
            if (!name) return;
            if (skuListSet.size > 0 && !skuListSet.has(name.toLowerCase())) {
                invalid.add(name);
            }
        });
        return Array.from(invalid);
    }, [
        newOrder,
        skuListSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initRole = async ()=>{
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                const userId = data.session?.user?.id;
                if (!userId) {
                    setIsAdmin(true);
                    return;
                }
                const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("role").eq("id", userId).maybeSingle();
                setIsAdmin(profile?.role === "admin");
            } catch  {
                setIsAdmin(true);
            }
        };
        initRole();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!columnRef.current) return;
        const container = columnRef.current;
        let direction = 1;
        const interval = setInterval(()=>{
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (maxScroll <= 0) return;
            const next = container.scrollLeft + direction * container.clientWidth;
            if (next >= maxScroll) direction = -1;
            if (next <= 0) direction = 1;
            container.scrollTo({
                left: Math.max(0, Math.min(maxScroll, next)),
                behavior: "smooth"
            });
        }, 9000);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setQueued(readQueue());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controller = new AbortController();
        const intakeApiUrl = `${("TURBOPACK compile-time value", "http://localhost:4000") ?? "http://localhost:4000"}/api/sku-products`;
        const loadSkuCatalog = async ()=>{
            try {
                setSkuFetchError(null);
                const response = await fetch(intakeApiUrl, {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error("Failed to load SKU catalog");
                }
                const payload = await response.json();
                const suggestions = Array.from(new Set((payload.products ?? []).map((product)=>product.instrument ?? product.name ?? product.description ?? "").filter(Boolean)));
                setSkuOptions(suggestions);
                const catalog = (payload.products ?? []).map((product)=>({
                        sku: product.sku ?? product.name ?? product.instrument ?? product.description ?? "",
                        name: product.name ?? product.instrument ?? product.description ?? ""
                    })).filter((entry)=>entry.sku && entry.name);
                setSkuCatalog(catalog);
            } catch (err) {
                if (controller.signal.aborted) return;
                console.warn("Failed to load SKU catalog", err);
                setSkuOptions([]);
                setSkuCatalog([]);
                setSkuFetchError("SKU catalog is unavailable right now.");
            }
        };
        loadSkuCatalog();
        return ()=>controller.abort();
    }, []);
    const enqueue = (action)=>{
        const updated = [
            ...readQueue(),
            action
        ];
        writeQueue(updated);
        setQueued(updated);
    };
    const flushQueue = async ()=>{
        const actions = readQueue();
        if (!actions.length) return;
        const remaining = [];
        for (const action of actions){
            try {
                if (action.type === "mark_paid") {
                    const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
                        payment_status: "paid",
                        status: "fulfillment"
                    }).eq("id", action.orderId);
                    if (updateError) throw updateError;
                }
                if (action.type === "update_status") {
                    const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
                        status: action.status
                    }).eq("id", action.orderId);
                    if (updateError) throw updateError;
                }
                if (action.type === "ship_partial") {
                    const { error: shipError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc("ship_partial", {
                        p_order_id: action.payload.orderId,
                        p_items: action.payload.items,
                        p_awb: action.payload.awb,
                        p_courier: action.payload.courier
                    });
                    if (shipError) throw shipError;
                }
            } catch  {
                remaining.push(action);
            }
        }
        writeQueue(remaining);
        setQueued(remaining);
        if (remaining.length === 0) reload();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOnline = ()=>flushQueue();
        window.addEventListener("online", handleOnline);
        return ()=>window.removeEventListener("online", handleOnline);
    }, []);
    const markPaid = async (orderId)=>{
        setError(null);
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
            payment_status: "paid",
            status: "fulfillment"
        }).eq("id", orderId);
        if (updateError) {
            enqueue({
                type: "mark_paid",
                orderId
            });
            setError("Offline - queued payment update.");
            return;
        }
        reload();
    };
    const updateStatus = async (order, target)=>{
        if (order.status === "payment" && order.payment_status !== "paid") {
            setError("Payment required before fulfillment.");
            return;
        }
        setError(null);
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
            status: target
        }).eq("id", order.id);
        if (updateError) {
            enqueue({
                type: "update_status",
                orderId: order.id,
                status: target
            });
            setError("Offline - queued status update.");
            return;
        }
        reload();
    };
    const openFulfillment = (order)=>{
        const qtyByProduct = {};
        order.items.forEach((item)=>{
            qtyByProduct[item.product_name] = item.qty_ordered;
        });
        setFulfillment({
            order,
            qtyByProduct,
            awb: "",
            courier: ""
        });
    };
    const openHistory = async (order)=>{
        setHistoryOrder(order);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("shipments").select("id, awb, courier, shipped_at, shipment_items(product_name, qty_shipped)").eq("order_id", order.id).order("shipped_at", {
            ascending: false
        });
        if (error) {
            setError("Failed to load shipment history.");
            setShipments([]);
            return;
        }
        setShipments(data ?? []);
    };
    const deleteShipment = async (shipmentId)=>{
        const confirmDelete = window.confirm("Delete this shipment record?");
        if (!confirmDelete) return;
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("shipments").delete().eq("id", shipmentId);
        if (deleteError) {
            setError(deleteError.message || "Failed to delete shipment.");
            return;
        }
        setShipments((prev)=>prev ? prev.filter((item)=>item.id !== shipmentId) : prev);
    };
    const deleteOrder = async (orderId)=>{
        const confirmDelete = window.confirm("Delete this order? This cannot be undone.");
        if (!confirmDelete) return;
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").delete().eq("id", orderId);
        if (deleteError) {
            setError(deleteError.message || "Failed to delete order.");
            return;
        }
        reload();
    };
    const submitFulfillment = async ()=>{
        if (!fulfillment) return;
        const items = Object.entries(fulfillment.qtyByProduct).filter(([, qty])=>qty > 0).map(([product_name, qty_to_ship])=>({
                product_name,
                qty_to_ship
            }));
        if (!items.length) {
            setError("Select at least one item to ship.");
            return;
        }
        setError(null);
        const { error: shipError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc("ship_partial", {
            p_order_id: fulfillment.order.id,
            p_items: items,
            p_awb: fulfillment.awb || null,
            p_courier: fulfillment.courier || null
        });
        if (shipError) {
            enqueue({
                type: "ship_partial",
                payload: {
                    orderId: fulfillment.order.id,
                    items,
                    awb: fulfillment.awb || null,
                    courier: fulfillment.courier || null
                }
            });
            setError("Offline - queued fulfillment update.");
            return;
        }
        setFulfillment(null);
        reload();
    };
    const openNewOrder = ()=>{
        setNewOrder(emptyNewOrder());
    };
    const openRawImport = ()=>{
        setRawImport({
            text: "",
            parsing: false
        });
    };
    const handleRawImport = async ()=>{
        if (!rawImport || !rawImport.text.trim()) return;
        setRawImport({
            ...rawImport,
            parsing: true
        });
        try {
            const url = ("TURBOPACK compile-time value", "http://localhost:4000") ?? "http://localhost:4000";
            const res = await fetch(`${url}/api/parse-message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: rawImport.text
                })
            });
            const data = await res.json();
            setRawImport(null);
            let channel = data.channel || "direct";
            if (![
                "direct",
                "whatsapp",
                "email",
                "marketplace",
                "amazon",
                "flipkart"
            ].includes(channel)) channel = "direct";
            if (channel === "amazon" || channel === "flipkart") channel = "marketplace";
            const items = data.items?.length ? data.items.map((i)=>({
                    product_name: i.product || i.product_name || "Unknown Product",
                    qty_ordered: Number(i.qty || i.qty_ordered || 1)
                })) : [
                {
                    product_name: "",
                    qty_ordered: 1
                }
            ];
            setNewOrder({
                customerName: data.customer_name || "Unknown",
                channel,
                priority: data.priority || "normal",
                paymentRequired: true,
                items,
                notes: data.notes || ""
            });
        } catch  {
            setError("Failed to parse message text.");
            setRawImport({
                ...rawImport,
                parsing: false
            });
        }
    };
    const updateNewItem = (index, key, value)=>{
        setNewOrder((prev)=>{
            if (!prev) return prev;
            const items = [
                ...prev.items
            ];
            items[index] = {
                ...items[index],
                [key]: value
            };
            return {
                ...prev,
                items
            };
        });
    };
    const addNewItem = ()=>{
        setNewOrder((prev)=>prev ? {
                ...prev,
                items: [
                    ...prev.items,
                    {
                        product_name: "",
                        qty_ordered: 1
                    }
                ]
            } : prev);
    };
    const removeNewItem = (index)=>{
        setNewOrder((prev)=>{
            if (!prev) return prev;
            const items = prev.items.filter((_, i)=>i !== index);
            return {
                ...prev,
                items: items.length ? items : [
                    {
                        product_name: "",
                        qty_ordered: 1
                    }
                ]
            };
        });
    };
    const submitNewOrder = async ()=>{
        if (!newOrder) return;
        if (!newOrder.customerName.trim()) {
            setError("Customer name is required.");
            return;
        }
        const items = newOrder.items.filter((item)=>item.product_name.trim() && item.qty_ordered > 0);
        if (!items.length) {
            setError("Add at least one line item.");
            return;
        }
        setError(null);
        const { data: customer, error: customerError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("customers").select("id, payment_required").eq("name", newOrder.customerName.trim()).maybeSingle();
        if (customerError) {
            setError(customerError.message || "Failed to look up customer.");
            return;
        }
        let customerId = customer?.id;
        let paymentRequired = customer?.payment_required ?? newOrder.paymentRequired;
        if (!customerId) {
            const { data: created, error: createError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("customers").insert({
                name: newOrder.customerName.trim(),
                type: newOrder.paymentRequired ? "non_regular" : "regular",
                payment_required: newOrder.paymentRequired
            }).select("id, payment_required").single();
            if (createError || !created) {
                setError(createError?.message || "Failed to create customer.");
                return;
            }
            customerId = created.id;
            paymentRequired = created.payment_required;
        }
        const status = paymentRequired ? "payment" : "fulfillment";
        const paymentStatus = paymentRequired ? "pending" : "paid";
        const { data: order, error: orderError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").insert({
            customer_id: customerId,
            channel: newOrder.channel,
            priority: newOrder.priority,
            status,
            payment_status: paymentStatus,
            notes: newOrder.notes.trim() || null
        }).select("id").single();
        if (orderError || !order) {
            setError(orderError?.message || "Failed to create order.");
            return;
        }
        const itemsPayload = items.map((item)=>({
                order_id: order.id,
                product_name: item.product_name.trim(),
                qty_ordered: Number(item.qty_ordered)
            }));
        const { error: itemsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").insert(itemsPayload);
        if (itemsError) {
            setError(itemsError.message || "Failed to add order items.");
            return;
        }
        setNewOrder(null);
        reload();
    };
    const openCustomers = async ()=>{
        setShowCustomers(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("customers").select("id, name, payment_required, type").order("name", {
            ascending: true
        });
        if (error) {
            setError("Failed to load customers.");
            setCustomers([]);
            return;
        }
        setCustomers(data ?? []);
    };
    const openRoles = async ()=>{
        setShowRoles(true);
        setError(null);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("profiles").select("id, role").order("created_at", {
            ascending: false
        });
        if (error) {
            setError(error.message || "Failed to load roles.");
            setProfiles([]);
            return;
        }
        setProfiles(data ?? []);
    };
    const toggleRole = async (profile)=>{
        const nextRole = profile.role === "admin" ? "staff" : "admin";
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("profiles").update({
            role: nextRole
        }).eq("id", profile.id);
        if (error) {
            setError(error.message || "Failed to update role.");
            return;
        }
        setProfiles((prev)=>prev.map((item)=>item.id === profile.id ? {
                    ...item,
                    role: nextRole
                } : item));
    };
    const openMappings = async ()=>{
        setShowMappings(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_mappings").select("id, marketplace, external_sku, product_name").order("marketplace", {
            ascending: true
        });
        if (error) {
            setError("Failed to load SKU mappings.");
            setMappings([]);
            return;
        }
        setMappings(data ?? []);
    };
    const deleteMapping = async (mappingId)=>{
        const confirmDelete = window.confirm("Delete this SKU mapping?");
        if (!confirmDelete) return;
        const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_mappings").delete().eq("id", mappingId);
        if (deleteError) {
            setError(deleteError.message || "Failed to delete SKU mapping.");
            return;
        }
        setMappings((prev)=>prev.filter((item)=>item.id !== mappingId));
    };
    const addMapping = async ()=>{
        if (!mappingForm.marketplace.trim() || !mappingForm.external_sku.trim() || !mappingForm.product_name.trim()) {
            setError("All SKU mapping fields are required.");
            return;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_mappings").insert({
            marketplace: mappingForm.marketplace.trim(),
            external_sku: mappingForm.external_sku.trim(),
            product_name: mappingForm.product_name.trim()
        }).select("id, marketplace, external_sku, product_name").single();
        if (error || !data) {
            setError(error?.message || "Failed to add SKU mapping.");
            return;
        }
        setMappings((prev)=>[
                data,
                ...prev
            ]);
        setMappingForm({
            marketplace: "",
            external_sku: "",
            product_name: ""
        });
    };
    const toggleCustomerPayment = async (customer)=>{
        const payment_required = !customer.payment_required;
        const type = payment_required ? "non_regular" : "regular";
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("customers").update({
            payment_required,
            type
        }).eq("id", customer.id);
        if (updateError) {
            setError("Failed to update customer.");
            return;
        }
        setCustomers((prev)=>prev.map((item)=>item.id === customer.id ? {
                    ...item,
                    payment_required,
                    type
                } : item));
    };
    const markReviewed = async (orderId)=>{
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
            needs_review: false
        }).eq("id", orderId);
        if (updateError) {
            setError("Failed to update review status.");
            return;
        }
        reload();
    };
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const term = search.trim().toLowerCase();
        return orders.filter((order)=>{
            const matchesSearch = term ? order.customer_name.toLowerCase().includes(term) || order.items.some((item)=>item.product_name.toLowerCase().includes(term)) : true;
            const matchesPriority = priorityFilter === "all" ? true : order.priority === priorityFilter;
            const matchesStatus = statusFilter === "all" ? true : order.status === statusFilter;
            return matchesSearch && matchesPriority && matchesStatus;
        });
    }, [
        orders,
        search,
        priorityFilter,
        statusFilter
    ]);
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const counts = {};
        columns.forEach((column)=>{
            counts[column.key] = filteredOrders.filter((card)=>card.status === column.key).length;
        });
        return counts;
    }, [
        filteredOrders
    ]);
    const emptyState = hasSupabase && !loading && orders.length === 0;
    const needsReviewCount = orders.filter((order)=>order.needs_review).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-semibold",
                                children: "DispatchBoard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 957,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-ink/60",
                                children: "Order workflow for dispatch and fulfillment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 958,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 956,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            needsReviewCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
                                children: [
                                    needsReviewCount,
                                    " needs review"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 962,
                                columnNumber: 13
                            }, this) : null,
                            queued.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                onClick: flushQueue,
                                children: [
                                    "Sync ",
                                    queued.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 967,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                onClick: openCustomers,
                                disabled: tvMode || !isAdmin,
                                children: "Customers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 974,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                onClick: openRoles,
                                disabled: tvMode || !isAdmin,
                                children: "Roles"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 981,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                onClick: openMappings,
                                disabled: tvMode || !isAdmin,
                                children: "SKU Map"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 988,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl bg-ink/10 px-4 py-2 text-sm font-semibold text-ink",
                                onClick: openRawImport,
                                disabled: tvMode,
                                children: "Parse Text"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 995,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white",
                                onClick: openNewOrder,
                                disabled: tvMode,
                                children: "+ New Order"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 955,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "px-6 py-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[1400px] space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "w-full max-w-xs rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    placeholder: "Search customer or product",
                                    value: search,
                                    onChange: (event)=>setSearch(event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    value: priorityFilter,
                                    onChange: (event)=>setPriorityFilter(event.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All priorities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1026,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "urgent",
                                            children: "Urgent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "high",
                                            children: "High"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "normal",
                                            children: "Normal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    value: statusFilter,
                                    onChange: (event)=>setStatusFilter(event.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All stages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "new",
                                            children: "New"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "payment",
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "fulfillment",
                                            children: "Fulfillment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1039,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "shipped",
                                            children: "Shipped"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1040,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "done",
                                            children: "Done"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this),
                        skuCatalog.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-xs text-ink/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px]",
                                    children: [
                                        "WhatsApp template: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-ink",
                                            children: ORDER_TEMPLATE
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1046,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[10px] text-ink/50",
                                    children: ORDER_TEMPLATE_NOTE
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: skuCatalog.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-ink/10 bg-paper px-2 py-1 text-[10px] font-semibold text-ink",
                                            children: [
                                                product.name,
                                                " (",
                                                product.sku,
                                                ")"
                                            ]
                                        }, product.sku, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1052,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1050,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1045,
                            columnNumber: 13
                        }, this) : null,
                        tvMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-ink/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/60",
                            children: "TV View - read only"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1063,
                            columnNumber: 13
                        }, this) : null,
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-accent",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1067,
                            columnNumber: 20
                        }, this) : null,
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-ink/60",
                            children: "Loading orders..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1068,
                            columnNumber: 22
                        }, this) : null,
                        emptyState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-dashed border-ink/20 bg-white/70 p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "No orders yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-ink/60",
                                    children: "Create a manual order to get started."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-4 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white",
                                    onClick: openNewOrder,
                                    children: "Add first order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1070,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: columnRef,
                            className: "grid gap-4 overflow-x-auto pb-4 board-grid justify-center",
                            "aria-live": "polite",
                            children: columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "flex h-[70vh] min-w-[220px] flex-col rounded-2xl border border-ink/10 bg-white/70 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold uppercase tracking-wide text-ink/60",
                                                    children: column.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1088,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-paper px-2 py-1 text-xs font-semibold text-ink/50",
                                                    children: totals[column.key]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1087,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 space-y-3 overflow-y-auto pb-2",
                                            children: filteredOrders.filter((card)=>card.status === column.key).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderCard, {
                                                    card: card,
                                                    tvMode: tvMode,
                                                    onMoveBack: ()=>updateStatus(card, prevStatus(card.status)),
                                                    onMoveForward: ()=>updateStatus(card, nextStatus(card.status)),
                                                    onMarkPaid: ()=>markPaid(card.id),
                                                    onOpenFulfillment: ()=>openFulfillment(card),
                                                    onOpenHistory: ()=>openHistory(card),
                                                    onMarkReviewed: ()=>markReviewed(card.id),
                                                    isAdmin: isAdmin,
                                                    onDelete: ()=>deleteOrder(card.id)
                                                }, card.id, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1093,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, column.key, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1013,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1012,
                columnNumber: 7
            }, this),
            fulfillment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: fulfillment.order.customer_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: "Fulfillment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>setFulfillment(null),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: fulfillment.order.items.map((item)=>{
                                const value = fulfillment.qtyByProduct[item.product_name] ?? 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-ink/10 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: item.product_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-ink/50",
                                                        children: [
                                                            "Ordered ",
                                                            item.qty_ordered
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1139,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1137,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "h-12 w-12 rounded-full border border-ink/10 text-lg font-semibold",
                                                        onClick: ()=>setFulfillment((prev)=>prev ? {
                                                                    ...prev,
                                                                    qtyByProduct: {
                                                                        ...prev.qtyByProduct,
                                                                        [item.product_name]: Math.max(0, value - 1)
                                                                    }
                                                                } : prev),
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1142,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "h-12 w-20 rounded-xl border border-ink/10 text-center text-lg font-semibold",
                                                        value: value,
                                                        onChange: (event)=>{
                                                            const next = Math.min(item.qty_ordered, Number(event.target.value || 0));
                                                            setFulfillment((prev)=>prev ? {
                                                                    ...prev,
                                                                    qtyByProduct: {
                                                                        ...prev.qtyByProduct,
                                                                        [item.product_name]: next
                                                                    }
                                                                } : prev);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "h-12 w-12 rounded-full border border-ink/10 text-lg font-semibold",
                                                        onClick: ()=>setFulfillment((prev)=>prev ? {
                                                                    ...prev,
                                                                    qtyByProduct: {
                                                                        ...prev.qtyByProduct,
                                                                        [item.product_name]: Math.min(item.qty_ordered, value + 1)
                                                                    }
                                                                } : prev),
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1175,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1141,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 21
                                    }, this)
                                }, item.product_name, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl border border-ink/10 px-4 py-2 text-xs font-semibold",
                                    onClick: ()=>setFulfillment((prev)=>prev ? {
                                                ...prev,
                                                qtyByProduct: Object.fromEntries(prev.order.items.map((item)=>[
                                                        item.product_name,
                                                        item.qty_ordered
                                                    ]))
                                            } : prev),
                                    children: "Ship All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl border border-ink/10 px-4 py-2 text-xs font-semibold",
                                    onClick: ()=>setFulfillment((prev)=>prev ? {
                                                ...prev,
                                                qtyByProduct: Object.fromEntries(prev.order.items.map((item)=>[
                                                        item.product_name,
                                                        0
                                                    ]))
                                            } : prev),
                                    children: "Clear All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "AWB / Tracking",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: fulfillment.awb,
                                            onChange: (event)=>setFulfillment((prev)=>prev ? {
                                                        ...prev,
                                                        awb: event.target.value
                                                    } : prev)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "Courier",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: fulfillment.courier,
                                            onChange: (event)=>setFulfillment((prev)=>prev ? {
                                                        ...prev,
                                                        courier: event.target.value
                                                    } : prev)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-ink/50",
                                    children: "Partial shipments will automatically create a sub-order for remaining items."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white",
                                    onClick: submitFulfillment,
                                    children: "Ship Partial"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1258,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1119,
                columnNumber: 9
            }, this) : null,
            rawImport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold",
                                                children: "Smart Parse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink/50",
                                                children: "Paste raw WhatsApp or Email body"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1278,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                        onClick: ()=>setRawImport(null),
                                        disabled: rawImport.parsing,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 1277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-3 text-sm",
                                rows: 8,
                                placeholder: "e.g. Hi, please deliver 5 boxes of Product A and 2 boxes of Product B. Urgent.",
                                value: rawImport.text,
                                onChange: (e)=>setRawImport((prev)=>prev ? {
                                            ...prev,
                                            text: e.target.value
                                        } : prev),
                                disabled: rawImport.parsing
                            }, void 0, false, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 1291,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink/50",
                                        children: "AI will safely extract line items and auto-fill the order form."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl bg-ink px-6 py-2 text-sm font-semibold text-white disabled:opacity-50",
                                        onClick: handleRawImport,
                                        disabled: rawImport.parsing || !rawImport.text.trim(),
                                        children: rawImport.parsing ? "Extracting..." : "Extract with AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1302,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Board.tsx",
                                lineNumber: 1300,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Board.tsx",
                        lineNumber: 1276,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1275,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1274,
                columnNumber: 9
            }, this) : null,
            newOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "New Order"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: "Manual entry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>setNewOrder(null),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1318,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "Customer name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: newOrder.customerName,
                                            onChange: (event)=>setNewOrder((prev)=>prev ? {
                                                        ...prev,
                                                        customerName: event.target.value
                                                    } : prev)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1329,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "Channel",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: newOrder.channel,
                                            onChange: (event)=>setNewOrder((prev)=>prev ? {
                                                        ...prev,
                                                        channel: event.target.value
                                                    } : prev),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "direct",
                                                    children: "Direct"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "whatsapp",
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "email",
                                                    children: "Email/PO"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "marketplace",
                                                    children: "Marketplace"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1347,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1337,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "Priority",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: newOrder.priority,
                                            onChange: (event)=>setNewOrder((prev)=>prev ? {
                                                        ...prev,
                                                        priority: event.target.value
                                                    } : prev),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "normal",
                                                    children: "Normal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1359,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "high",
                                                    children: "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1360,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "urgent",
                                                    children: "Urgent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1361,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1352,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: [
                                        "Payment required",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                            value: newOrder.paymentRequired ? "yes" : "no",
                                            onChange: (event)=>setNewOrder((prev)=>prev ? {
                                                        ...prev,
                                                        paymentRequired: event.target.value === "yes"
                                                    } : prev),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yes",
                                                    children: "Yes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "no",
                                                    children: "No (Regular distributor)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1366,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-ink/70",
                                    children: "Line items"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3",
                                    children: newOrder.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 md:grid-cols-[1fr_120px_80px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "rounded-xl border border-ink/10 px-3 py-2",
                                                    list: "sku-suggestions",
                                                    placeholder: "Product name (choose from SKU catalog)",
                                                    value: item.product_name,
                                                    onChange: (event)=>updateNewItem(index, "product_name", event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1384,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "rounded-xl border border-ink/10 px-3 py-2",
                                                    type: "number",
                                                    min: 1,
                                                    value: item.qty_ordered,
                                                    onChange: (event)=>updateNewItem(index, "qty_ordered", Number(event.target.value || 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1391,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                                    onClick: ()=>removeNewItem(index),
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Board.tsx",
                                                    lineNumber: 1398,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${item.product_name}-${index}`, true, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs",
                                    children: skuFetchError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-accent",
                                        children: skuFetchError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1409,
                                        columnNumber: 19
                                    }, this) : invalidSkuItems.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-accent",
                                        children: [
                                            "Catalog mismatch: ",
                                            invalidSkuItems.join(", "),
                                            ". Please choose items from the SKU list above."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1411,
                                        columnNumber: 19
                                    }, this) : skuOptions.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink/50",
                                        children: "Start typing to pick a known SKU or use the dropdown."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink/50",
                                        children: "Loading SKU catalog…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1417,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                    id: "sku-suggestions",
                                    children: skuOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: option
                                        }, option, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1422,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1420,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-3 rounded-xl border border-ink/10 px-4 py-2 text-xs font-semibold",
                                    onClick: addNewItem,
                                    children: "+ Add item"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1425,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1379,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "mt-6 block text-sm font-semibold text-ink/70",
                            children: [
                                "Notes",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "mt-2 w-full rounded-xl border border-ink/10 px-3 py-2",
                                    rows: 3,
                                    value: newOrder.notes,
                                    onChange: (event)=>setNewOrder((prev)=>prev ? {
                                                ...prev,
                                                notes: event.target.value
                                            } : prev)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1435,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1433,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-ink/50",
                                    children: "Orders will appear immediately on the board."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white",
                                    onClick: submitNewOrder,
                                    children: "Create order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1445,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1443,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1317,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1316,
                columnNumber: 9
            }, this) : null,
            showCustomers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "Customers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1461,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: "Payment rules"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>setShowCustomers(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1464,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1459,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                customers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: customer.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-ink/50",
                                                        children: customer.payment_required ? "Payment required" : "Credit enabled"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1473,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1471,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                                onClick: ()=>toggleCustomerPayment(customer),
                                                children: customer.payment_required ? "Promote to regular" : "Require payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1475,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, customer.id, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1470,
                                        columnNumber: 17
                                    }, this)),
                                customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink/50",
                                    children: "No customers yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1468,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1458,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1457,
                columnNumber: 9
            }, this) : null,
            showRoles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "Roles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: "Admin vs staff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1495,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>setShowRoles(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1499,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1494,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                profiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-ink/50",
                                                        children: "User ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1507,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: profile.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1506,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-xl border border-ink/10 px-3 py-2 text-xs font-semibold",
                                                onClick: ()=>toggleRole(profile),
                                                children: profile.role === "admin" ? "Set staff" : "Set admin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, profile.id, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1505,
                                        columnNumber: 17
                                    }, this)),
                                profiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink/50",
                                    children: "No profiles yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1518,
                                    columnNumber: 40
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1503,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1493,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1492,
                columnNumber: 9
            }, this) : null,
            showMappings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "SKU Mapping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: "Marketplace SKU to internal product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1528,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>setShowMappings(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1527,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    placeholder: "Marketplace",
                                    value: mappingForm.marketplace,
                                    onChange: (event)=>setMappingForm((prev)=>({
                                                ...prev,
                                                marketplace: event.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1537,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    placeholder: "External SKU",
                                    value: mappingForm.external_sku,
                                    onChange: (event)=>setMappingForm((prev)=>({
                                                ...prev,
                                                external_sku: event.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "rounded-xl border border-ink/10 px-3 py-2 text-sm",
                                    placeholder: "Product name",
                                    value: mappingForm.product_name,
                                    onChange: (event)=>setMappingForm((prev)=>({
                                                ...prev,
                                                product_name: event.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1549,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1536,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "mt-3 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white",
                            onClick: addMapping,
                            children: "Add mapping"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1556,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 space-y-3",
                            children: [
                                mappings.map((mapping)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-ink/10 p-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: mapping.marketplace
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1563,
                                                        columnNumber: 21
                                                    }, this),
                                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "rounded-full border border-ink/10 px-2 py-1 text-[10px] font-semibold text-ink/60",
                                                        onClick: ()=>deleteMapping(mapping.id),
                                                        title: "Delete mapping",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1565,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1562,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-ink/50",
                                                children: [
                                                    "SKU: ",
                                                    mapping.external_sku
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-ink/50",
                                                children: [
                                                    "Product: ",
                                                    mapping.product_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, mapping.id, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1561,
                                        columnNumber: 17
                                    }, this)),
                                mappings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink/50",
                                    children: "No mappings yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1578,
                                    columnNumber: 40
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1559,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1526,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1525,
                columnNumber: 9
            }, this) : null,
            historyOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: "Shipments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1589,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink/50",
                                            children: historyOrder.customer_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Board.tsx",
                                            lineNumber: 1590,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-ink/10 px-3 py-1 text-xs",
                                    onClick: ()=>{
                                        setHistoryOrder(null);
                                        setShipments(null);
                                    },
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1592,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1587,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                (shipments ?? []).map((shipment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-ink/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: [
                                                            "AWB ",
                                                            shipment.awb || "-"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 21
                                                    }, this),
                                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "rounded-full border border-ink/10 px-2 py-1 text-[10px] font-semibold text-ink/60",
                                                        onClick: ()=>deleteShipment(shipment.id),
                                                        title: "Delete shipment",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1608,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-ink/50",
                                                        children: new Date(shipment.shipped_at).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1616,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1605,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-ink/50",
                                                children: [
                                                    "Courier: ",
                                                    shipment.courier || "-"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1618,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 space-y-1 text-sm",
                                                children: shipment.shipment_items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item.product_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Board.tsx",
                                                                lineNumber: 1622,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "x",
                                                                    item.qty_shipped
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Board.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, `${item.product_name}-${index}`, true, {
                                                        fileName: "[project]/src/components/Board.tsx",
                                                        lineNumber: 1621,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Board.tsx",
                                                lineNumber: 1619,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, shipment.id, true, {
                                        fileName: "[project]/src/components/Board.tsx",
                                        lineNumber: 1604,
                                        columnNumber: 17
                                    }, this)),
                                shipments && shipments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink/50",
                                    children: "No shipments yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Board.tsx",
                                    lineNumber: 1630,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Board.tsx",
                            lineNumber: 1602,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Board.tsx",
                    lineNumber: 1586,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1585,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "flex justify-center px-6 pb-6 text-xs text-ink/40",
                children: "© 2026 DispatchBoard"
            }, void 0, false, {
                fileName: "[project]/src/components/Board.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Board.tsx",
        lineNumber: 954,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0b.99n.._.js.map