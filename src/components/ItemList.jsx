import Item from './Item'

const ItemList = ({products}) => {
    return(
        <div className='grid' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList