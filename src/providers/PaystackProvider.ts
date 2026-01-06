import { logger } from 'src/utils/logger';
import { PaymentProvider, PaymentInitRequest, PaymentVerificationResult } from 'src/interfaces/IPaymentProvider';
// import { v4 as uuidv4 } from 'uuid';


export class PaystackProvider implements PaymentProvider {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.PAYSTACK_SECRET_KEY || 'sk_test_dummy';
  }

  async initializePayment(data: PaymentInitRequest): Promise<any> {
    // Simulate Paystack init
    const authorization_url = `https://paystack.co/pay/${data.reference}`;
    logger.info(`Paystack: Initialized payment for ${data.reference}`);

    return {
      success: true,
      data: {
        authorization_url,
        reference: data.reference,
        // access_code: uuidv4(),
      },
    };
  }

  async verifyPayment(reference: string): Promise<PaymentVerificationResult> {
    // Simulate 80% success rate
    const isSuccess = Math.random() > 0.2;

    const result: PaymentVerificationResult = {
      success: isSuccess,
      amount: 5000, // Simulate
      reference,
      status: isSuccess ? 'success' : 'failed',
      gateway: 'paystack',
    };

    logger.info(`Paystack: Verified ${reference} → ${result.status}`);
    return result;
  }
}