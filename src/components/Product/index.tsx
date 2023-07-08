import { FC } from 'react'
import { Card, Description, Image, Info, Price, Variant } from './Product.style'
import { ProductInterface } from '../../types'

const Product: FC<{product: ProductInterface}> = ({product}) => {
  return (
    <Card>
      <Image src={product.featuredAsset.source} />
      <Info>
        <Description>
          {product.description}
          <Variant>
            Variants Price
          </Variant>
          {
            product.variants.map(price => <Price>
              $ {Number(price.price).toLocaleString('en')}
            </Price>)
          }
        </Description>
      </Info>
    </Card>
  )
}

export default Product
