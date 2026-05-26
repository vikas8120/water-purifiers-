import { IndianRupee, Minus, Plus, Trash2, X } from "lucide-react";

export default function CartDrawer({ open, onClose, cartItems, onIncrease, onDecrease, onRemove, total }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/60" onClick={onClose} />}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform border-l border-white/10 bg-slate-950/95 p-5 backdrop-blur-md transition duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Your Cart</h3>
          <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white">
            <X size={18} />
          </button>
        </div>

        <div className="h-[calc(100%-190px)] space-y-3 overflow-y-auto pr-1">
          {cartItems.length === 0 && <p className="text-slate-300">No items in cart yet.</p>}
          {cartItems.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/15 bg-white/5 p-3">
              <p className="font-medium text-white">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">?{item.price.toLocaleString("en-IN")}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => onDecrease(item.id)} className="rounded-md bg-white/10 p-1 text-white">
                    <Minus size={14} />
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)} className="rounded-md bg-white/10 p-1 text-white">
                    <Plus size={14} />
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="rounded-md bg-rose-500/20 p-1 text-rose-300">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4">
          <div className="flex items-center justify-between text-white">
            <span>Total</span>
            <span className="flex items-center font-semibold">
              <IndianRupee size={16} />
              {total.toLocaleString("en-IN")}
            </span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-white transition hover:bg-sky-400">
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}

