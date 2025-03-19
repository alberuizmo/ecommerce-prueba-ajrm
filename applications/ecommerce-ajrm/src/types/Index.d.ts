export interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  tax: number;
}

export interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  tax: number;
}

export interface CartItemProps extends ICartItem {
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export interface CartState {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

type UserRole = "client" | "admin";

export interface AuthState {
  user: { username: string; role: UserRole } | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
}

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: {
        official: string;
        common: "Colombia";
      };
    };
  };
}

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  tax: number;
}

export interface PrivateRouteProps {
  allowedRoles: string[];
}

export interface InvoiceRow {
  id: number;
  name: string;
  quantity: number;
  price: number;
  tax: number;
}


export interface Invoice {
  id: number;
  user: string;
  items: InvoiceRow[];
  total: number;
  billingInfo: BillingInfo;
  date: string;
}

export interface BillingInfo {
  name: string;
  email: string;
  country: string;
}

export interface InvoiceCardProps {
  invoice: Invoice;
}
