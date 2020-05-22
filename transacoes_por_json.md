**/product** : operacoes nos produtos
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
criar novo produto| POST | request_models/product/product_new.json
modificar produto| PATCH | request_models/product/product_modify.json
excluir produto| DELETE | `{ "id" : "id_do_produto_a_excluir" }`

**/product/all** : resgatar todos os produtos
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar todos os produtos| GET | (nao precisa ter body)

**/productoffer** : oferta de produtos feitas pelos produtores
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
criar nova oferta de produto| POST | request_models/productoffer/productoffer_new.json
modificar oferta de produto| PATCH | request_models/productoffer/productoffer_modify.json
excluir oferta de produto| DELETE | `{ "id" : "id_da_oferta_a_excluir" }`
resgatar oferta de produto especifica| GET | `{ "id" : "id_da_oferta_a_retornar" }`

**/productoffer/all** : resgatar todos os produtos
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar todas as ofertas| GET | (nao precisa ter body)

**/user** : usuarios, tanto consumidores quanto produtores
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
criar novo usuario| POST | request_models/user_new.json
resgatar usuario| GET | `{ "id" : "id_do_usuario_a_resgatar" }`

**/producer** : resgatar produtor
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar produtor | GET | `{ "id" : "id_do_produtor_resgatar" }`

**/producer/all** : visualizar todos produtos
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar todos os produtores| GET | (nao precisa de body)

**/order** : pedidos feito pelos usuarios
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
criar novo pedido| POST | request_models/order/order_new.json
modificar pedido| PATCH | request_models/order/order_modify.json
excluir pedido| DELETE | `{ "id" : "id_do_pedido_a_excluir" }`
resgatar um pedido especifico| GET | `{ "id" : "id_do_pedido_a_resgatar" }`

**/order/producer** : pedidos associados aos produtores 
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar todos os pedidos associados a um produtor| GET | `{ "id" : "id_do_produtor" }`

**/order/user** : pedidos associados aos produtores 
Descrição | METODO HTTP | modelo da requisição JSON
--------- | ----------- | -------------------------
resgatar todos os pedidos associados a um usuario| GET | `{ "id" : "id_do_usuario" }`