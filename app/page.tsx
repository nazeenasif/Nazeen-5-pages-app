export default function home(){
    return (
        <div className="text-center bg-blue-950 m-3 border-4 border-yellow-400 min-h-screen ">
    <h1 className="bg-green-600 text-yellow-400 text-3xl font-extrabold border-green-900 border-4 p-3 m-4" >
        <b><i>PLANTS AND ANIMALS</i></b></h1>
        <div className="flex space-x-4">
        <img src="plants.webp" width="515" height="300"></img>
        <img src="animals.webp" width="515" height="300"></img>
        </div>
            <p className="text-center text-yellow-300 text-xl">Plants and animals are two distinct groups of living organisms that play vital roles in the ecosystem.
             Plants, belonging to the kingdom Plantae, are autotrophic, meaning they produce their own food through photosynthesis, 
             utilizing sunlight, water, and carbon dioxide. They are typically stationary, have rigid cell walls made of cellulose, 
             and store energy in the form of starch. In contrast, animals, classified under the kingdom Animalia, are heterotrophic; 
             they must consume other organisms for energy. Most animals are mobile at some stage in their life cycle,
             possess complex nervous systems, and lack cell walls. While plants serve as primary producers in the food chain,
             contributing oxygen and energy, animals act as consumers, playing critical roles in pollination, seed dispersal,
             and maintaining ecological balance through various interactions within their habitats.
             Together, plants and animals create a diverse and interconnected web of life on Earth.
         </p>
         </div>
    )
}
