import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Product } from '../../../domain/entities/product.entity';

export class UpdateProductImageDto {
  @IsOptional()
  @IsNumber()
  product_id: number;

  @IsOptional()
  @IsString()
  image_url: string;
}
