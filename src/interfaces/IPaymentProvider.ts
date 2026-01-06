export interface PaymentInitRequest {
  amount: number;
  email: string;
  reference: string;
  callback_url?: string;
}

export interface PaymentVerificationResult {
  success: boolean;
  amount: number;
  reference: string;
  status: string;
  gateway: string;
}

export interface PaymentProvider {
  initializePayment(data: PaymentInitRequest): Promise<any>;
  verifyPayment(reference: string): Promise<PaymentVerificationResult>;
}