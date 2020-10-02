update product
set description = ${description}
where product_id = ${product_id};

select*from product;