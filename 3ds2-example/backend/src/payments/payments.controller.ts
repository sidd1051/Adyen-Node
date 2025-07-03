import { Body, Controller, Get, Post, BadRequestException } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  @Get("/paymentMethods")
  postPaymentMethods(): Promise<any> {
    return this.paymentService.postForPaymentMethods();
  }

  @Post("/payments/redirect")
  postPaymentsRedirect(@Body() requestBody: any): Promise<any> {
    if (!requestBody) {
      throw new BadRequestException("Request body is required");
    }
    return this.paymentService.postForPaymentsRedirect(requestBody);
  }

  @Post("/payments/native")
  postPaymentsNative(@Body() requestBody: any): Promise<any> {
    if (!requestBody) {
      throw new BadRequestException("Request body is required");
    }
    return this.paymentService.postForPaymentsNative(requestBody);
  }

  @Post("/sessions")
  postSessions(@Body() requestBody: any): Promise<any> {
    if (!requestBody || !requestBody.data) {
      throw new BadRequestException("Request body is required");
    }
    return this.paymentService.postForSessions(requestBody.data);
  }

  @Post("/paymentDetails")
  postPaymentDetails(@Body() requestBody: any): Promise<any> {
    if (!requestBody || !requestBody.data) {
      throw new BadRequestException("Request body is required");
    }
    return this.paymentService.postForPaymentDetails(requestBody.data);
  }
}
