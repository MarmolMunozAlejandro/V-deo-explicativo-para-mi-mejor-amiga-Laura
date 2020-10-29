
db.libros.find() /* Muestra todos los documentos de la colección */
db.libros.find({"libro":"El temor de un hombre sabio"}) /*Muestra un libro en concreto */
db.libros.find({"genero":"humor"}) /*Muestra todos los libros de un género en concreto */
db.libros.find({"puntuacion":10}) /* Muestra los libros con una puntuación de 10*/
db.libros.find({"puntuacion": {$gte:5}}) /*Muestra los libros cuya puntuación es superior a 5 */
db.libros.find({"puntuacion": {$lt:5}}) /* Muestra los libros cuya puntuación es inferior a 5 */
db.libros.find({"genero":"fantasia","puntuacion":{$gte:5}}) /* Muestra los libros cuya puntuación es superior o igual a 5 y del género fantasia */
db.libros.find({"genero": {$ne:"historia"}}) /*Muestra todos los libros salvo los del género "historia" */
db.libros.find({"genero": {$ne:"drama"},"puntuacion":{$gte:5}}) /* Muestra todos los libros de "drama" y cuya puntuación es mayor o igual a 5 */
db.libro.find({$or:[{"genero":"fantasia"},{"puntuacion":{$lt:8}}]}) /* O uestra todos los libros de "fantasía" o muestra los que tienen de puntuación inferior a 8 */