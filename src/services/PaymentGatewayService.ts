// import { PaystackProvider } from 'src/providers/PaystackProvider';
// import { KoraPayProvider } from 'src/providers/KoraPayProvider';
// import { FincraProvider } from 'src/providers/FincraProvider';
// import { StripeProvider } from './providers/StripeProvider';
// import { PaymentProvider } from '../interfaces/IPaymentProvider';

// export class PaymentGatewayService {
//   private providers: { [key: string]: PaymentProvider } = {};

//   constructor() {
//     this.providers['paystack'] = new PaystackProvider();
//     this.providers['korapay'] = new KoraPayProvider();
//     this.providers['fincra'] = new FincraProvider();
//     this.providers['stripe'] = new StripeProvider();
//   }

//   getProvider(gateway: string): PaymentProvider {
//     const provider = this.providers[gateway.toLowerCase()];
//     if (!provider) {
//       throw new Error(`Payment gateway ${gateway} not supported`);
//     }
//     return provider;
//   }
// }