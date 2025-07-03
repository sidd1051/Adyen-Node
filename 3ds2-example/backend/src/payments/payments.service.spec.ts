import { PaymentsService } from './payments.service';
import { ConfigService } from '@nestjs/config';

describe('PaymentsService validation', () => {
  let service: PaymentsService;

  beforeEach(() => {
    const configService = {
      get: jest.fn().mockReturnValue('test'),
    } as unknown as ConfigService;
    service = new PaymentsService(configService);
    // stub out API calls
    service.paymentsAPI = {
      payments: jest.fn(),
      paymentsDetails: jest.fn(),
      sessions: jest.fn(),
      paymentMethods: jest.fn(),
    } as any;
  });

  it('postForPaymentsNative throws when data is missing', async () => {
    await expect(
      service.postForPaymentsNative({ data: null as any, url: 'http://example.com' })
    ).rejects.toThrow('Payment data is required');
  });

  it('postForPaymentsRedirect throws when url is missing', async () => {
    await expect(
      service.postForPaymentsRedirect({ data: { paymentMethod: {}, browserInfo: {} }, url: undefined as any })
    ).rejects.toThrow('Return URL is required');
  });

  it('postForSessions throws when url is falsy', async () => {
    await expect(
      service.postForSessions({ url: undefined as any })
    ).rejects.toThrow('Return URL is required');
  });
});
