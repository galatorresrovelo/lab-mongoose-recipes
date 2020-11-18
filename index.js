const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    //Rutas (funciones)
    const information ={
    title:'Chiles en Nogada',
    level:'Amateur Chef',
    ingredients: ['Chiles Poblanos', 'Queso Cotija', 'Carne molida de Cerdo', 'Piñones','Duraznos','Peras', 'Huevos','Manzanas','Plátanos','Aceitunas', 'Pasa Amarillas','Acitrón','Jitomates', 'Cebollas', 'Ajos','Pimienta','Canela','Vinagre','Perejil','Aceita','Sal','Clavos','Vinagre','Nuez','Almendra','Granadas','Azúcar','Aceite'],
    cuisine: 'Mexican',
    dishType: 'Main Course',
    image:'',
    duration: '48',
    creator:'María de la Concepción Traslosheros',
   }
  //Create recipes
  Recipe.create(information,(error,{recipe})=>{
   if(error){
      console.log("Algo no paso",error);
      return
    }
    console.log('La receta fue creada éxitosamente',recipe.title)
   })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
