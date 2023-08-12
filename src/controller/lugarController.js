const sdk = require('api')('@fsq-developer/v1.0#78iknmrc2aljgfbp90');
sdk.auth('fsq3ykYAdV62fl/auns/QYxwbG9We6a/XnAnCP2UVtSFv9M=');

searchPlaceFourSquare = async (q, ll) => {
  const { data } = await sdk.autocomplete({
    query: q,
    ll,
    session_token: 'sCmRnJAEgBjNPU4WZqb7jDGgLESTXpsG' //gerado tem que ter 32 digitos alphanumericos
  });  
  return await Promise.all(
      data.results.map(async (p, index) => {
          const { place } = p
          const { fsq_id, location, name } = place;
          const placePhotos = await sdk.placePhotos({ fsq_id });            
          let photos = placePhotos?.data?.map(p => `${p.prefix}original${p.suffix}`) || [];            
          return {
              id: fsq_id,
              location,
              name,
              ranking: index + 1,
              photos
          };
      })
  ) || [];   
}

exports.buscar = async (req, res) => {  
  let { q, ll} = req.query;
  q = q || "";
  ll = ll || "-23.5583%2C-46.6415"
  try {                
      placesWithPhotos = await searchPlaceFourSquare(q, ll);        
      if(!placesWithPhotos || !placesWithPhotos.length){
          return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
      }
      return res.json(placesWithPhotos);
  } catch (err) {
      return res.status(500).json(err);
  }
};

