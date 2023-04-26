import { IsNotEmpty, IsEnum, IsString, MaxLength } from 'class-validator';
import { OrderStatus } from '../../constants/enums/orders-status.enum';

export class CreateOrderStatusDto {
  @IsNotEmpty()
  @IsEnum(OrderStatus)
  status_name: OrderStatus;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;
}
