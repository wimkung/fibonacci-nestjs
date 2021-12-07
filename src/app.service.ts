import { Injectable } from '@nestjs/common';
import { BigNumber } from 'bignumber.js';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello ${process.env.APP_NAME || 'WimkungXeiei'}!`;
  }

  getFibonacci(num1: string, num2: string, count: number): string {
    if (count > 1) {
      return this.getFibonacci(
        num2,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        BigNumber(num1).plus(num2).toFixed(),
        --count,
      );
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return BigNumber(num1).plus(num2).toFixed();
  }
}
