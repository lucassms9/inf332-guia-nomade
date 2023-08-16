const sugestao = {
    trabalho: {
        nomadedigital: {            
                lugares: [
                    "11126",
                    "11128",
                    //"Experimentar cafés locais",
                    //"Almoços saudáveis para manter a produtividade",
                    //"Jantares sociais com outros nômades digitais"
                ],
                acomodacoes: [
                    "19014"
                ],
                eventos: [
                    "Encontros de networking",
                    "Conferências para nômades digitais",
                    "Meetups",
                    "Hackathons",
                    "Participar de workshops de tecnologia",
                    "Explorar espaços de coworking locais",
                    "Participar de atividades de networking",
                    "Tours tecnológicos pela cidade",
                    "Exploração de bairros com foco em negócios"
                ],
                happyHour: [
                    "Confraternização em bares com Wi-Fi",
                    "Participação em eventos sociais de coworking",                
                ],
                profissoes: [
                    "Profissionais de TI",
                    "Designers",
                    "Redatores"
                ],                
                faixaEtaria: { inicial: 25, final: 45 },
                faixaValor: { inicial: 40, final: 120 }
            }
    },
    ferias: {
        turismocultural: {
            lugares: [
                "Cidades históricas",
                "Museus",
                "Locais religiosos",
                "Teatros",
                "Experimentar pratos tradicionais",
                "Jantar em restaurantes locais",
                "Degustações"
            ],
            acomodacoes: [
                "Hotéis tradicionais",
                "Pousadas charmosas",
                "Casas de hóspedes locais"
            ],
            eventos: [
                "Festivais culturais",
                "Exposições de arte",
                "Palestras",
                "Visitas guiadas a monumentos históricos",
                "Tours de arte",
                "Walking tours pela cidade",
                "Tours de arte e cultura"
            ],            
            happyHour: [
                "Coquetéis em bares locais",
                "Bares temáticos"
            ],
            profissoes: [
                "Historiadores",
                "Professores",
                "Guias turísticos"
            ],            
            faixaEtaria: { inicial: 25, final: 60 },
            faixaValor: { inicial: 50, final: 150 }
        },
        aventuraesportes: {
            lugares: [
                "Destinos com montanhas",
                "Praias",
                "Parques naturais"
            ],
            acomodacoes: [
                "Acampamentos",
                "Lodges",
                "Cabanas rústicas"
            ],
            eventos: [
                "Competições esportivas",
                "Festivais de esportes",
                "Workshops"
            ],
            experiencias: [
                "Trilhas guiadas por montanhas",
                "Passeios de bicicleta por trilhas naturais"
            ],
            alimentacao: [
                "Refeições energéticas",
                "Alimentos leves e saudáveis"
            ],
            happyHour: [
                "Bebidas refrescantes após atividades",
                "Bares com vista panorâmica"
            ],
            profissoes: [
                "Instrutores de esportes",
                "Treinadores físicos"
            ],
            passeiosGuiados: [
                "Guias de trilha",
                "Instrutores de esportes radicais"
            ],
            faixaEtaria: { inicial: 18, final: 45 },
            faixaValor: { inicial: 60, final: 200 }
        },
        ecoturismonatureza: {
            lugares: [
                "Parques nacionais",
                "Reservas naturais",
                "Florestas",
                "Refeições frescas e orgânicas",
                "Pratos locais"
            ],
            acomodacoes: [
                "Eco lodges",
                "Acampamentos sustentáveis"
            ],
            eventos: [
                "Passeios de observação de aves",
                "Safáris",
                "Palestras ambientais",
                "Trilhas interpretativas",
                "Safáris fotográficos",
                "Passeios de bicicleta ecológicos",
                "Guias de observação de aves",
                "Guias de safári"               
            ],                        
            happyHour: [
                "Piqueniques ao entardecer",
                "Bebidas orgânicas"
            ],
            profissoes: [
                "Biólogos",
                "Ecologistas",
                "Naturalistas"
            ],
            faixaEtaria: { inicial: 25, final: 55 },
            faixaValor: { inicial: 70, final: 180 }
        },
        viagemdeluxo: {
            lugares: [
                "Destinos exclusivos",
                "Resorts de luxo",
                "Jantares sofisticados",
                "Experiências gastronômicas"
            ],
            acomodacoes: [
                "Hotéis de cinco estrelas",
                "Vilas privativas"
            ],
            eventos: [
                "Jantares gourmet",
                "Festas exclusivas",
                "Eventos de moda",
                "Passeios de iate com guia",
                "Excursões VIP",
                "Passeios de iate privados",
                "Tours personalizados"
            ],
            happyHour: [
                "Coquetéis em bares luxuosos",
                "Degustações premium"
            ],
            profissoes: [
                "Empresários",
                "Executivos",
                "Celebridades"
            ],            
            faixaEtaria: { inicial: 30, final: 65 },
            faixaValor: { inicial: 200, final: 500 }
        },
        mochilao: {
            lugares: [
                "Destinos econômicos",
                "Cidades históricas",
                "Comidas de rua",
                "Cozinhar refeições simples",
                "Compartilhar refeições"
            ],
            acomodacoes: [
                "Albergues",
                "Hostels",
                "Hospedagens econômicas"
            ],
            eventos: [
                "Encontros de mochileiros",
                "Festivais de música",
                "Oficinas criativas",
                "Passeios a pé por bairros locais",
                "Tours alternativos",
                "Passeios urbanos a pé",
                "Tours culturais autênticos"
            ],
            happyHour: [
                "Conhecer bares locais",
                "Happy hour descontraído"
            ],
            profissoes: [
                "Estudantes",
                "Artistas",
                "Freelancers"
            ],            
            faixaEtaria: { inicial: 18, final: 35 },
            faixaValor: { inicial: 20, final: 80 }
        }
    }
}

const sdk = require('api')('@fsq-developer/v1.0#78iknmrc2aljgfbp90');
sdk.auth('fsq3ykYAdV62fl/auns/QYxwbG9We6a/XnAnCP2UVtSFv9M=');

sugestaoPorCategoria = (modo, estilo, categoria) => {    
    const resultado = sugestao[modo][estilo];        
    if (resultado) {
        return resultado[categoria];
    } 
    return [];
}

searchPlaceFourSquareByLatLongAndCategories = async (ll, categories) => {
    ll = ll || "-23.5583%2C-46.6415";  
    console.log("await searchPlaceFourSquareByLatLongAndCategories:", ll, categories);     
    const { data } = await sdk.placeSearch({
        ll,
        categories,
        sort: 'RATING',
        session_token: 'sCmRnJAEgBjNPU4WZqb7jDGgLESTXpsG' //gerado aleatóriamente deve conter 32 digitos alphanumericos conforme doc
    });
    
    return await Promise.all(
        data.results.map(async (d, index) => {
            const { fsq_id, location, name } = d;
            const placePhotos = await sdk.placePhotos({ fsq_id });            
            let photos = placePhotos?.data?.map(p => `${p.prefix}original${p.suffix}`) || [];            
            return {
                id: fsq_id,
                sponsored: index < 2 ? true : false,
                plan: "FREE",
                location,
                name,
                ranking: index + 1,
                photos                
            };
        })
    ) || [];    
}

buscarLugaresPorCategoria = async (modo, estilo, ll, tag) => {        
    const categories = sugestaoPorCategoria(modo, estilo, tag).join(","); 
    console.log("buscarLugaresPorCategoria:", categories);
    if(categories){
        return await searchPlaceFourSquareByLatLongAndCategories(ll, categories);
    }         
    return [];
    
}

exports.categorias = (req, res) => {
    const { modo, estilo} = req.params;        
    const resultado = sugestao[modo][estilo];    
    if (resultado) {
        return res.json(resultado);
    } 
    return res.status(404).json({ id, message: "não encontrado." });
};

exports.lugares = async (req, res) => {    
    let { modo, estilo, ll, tag} = req.params;    
    tag = tag || "lugares";
    console.log("controller.lugares:", modo, estilo, ll, tag);
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);
        console.log("controller.placesWithPhotos:", placesWithPhotos?.length || 0);
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.acomodacoes = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;    
    tag = tag || "acomodacoes";
    console.log("controller.acomodacoes:", modo, estilo, ll, tag);
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);
        console.log("controller.placesWithPhotos:", placesWithPhotos?.length || 0);
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.eventos = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;    
    tag = tag || "eventos";
    console.log("controller.eventos:", modo, estilo, ll, tag);
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);
        console.log("controller.placesWithPhotos:", placesWithPhotos?.length || 0);
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.happyHour = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;    
    tag = tag || "happyHour";
    console.log("controller.happyHour:", modo, estilo, ll, tag);
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);
        console.log("controller.placesWithPhotos:", placesWithPhotos?.length || 0);
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.recomendar = (req, res) => {
    const { profissao, idade, valorMedioPorDia } = req.query;
    const resultados = [];

    if(Number.isNaN(idade) || Number.isNaN(valorMedioPorDia)){
        return res.status(400).json({ mensagem: 'idade e valorMedioPorDia devem ser números' });    
    }   
    
    for (const modo in sugestao) {
      for (const estilo in sugestao[modo]) {        
        const info = sugestao[modo][estilo];                  
        info.profissoes = info.profissoes.map(p => p.toLowerCase());
        console.log(info.profissoes);
        
        if (
            info.profissoes.includes(profissao?.toLowerCase())
            || (idade >= info.faixaEtaria.inicial && idade <= info.faixaEtaria.final)
            || (valorMedioPorDia >= info.faixaValor.inicial && valorMedioPorDia <= info.faixaValor.final)                        
            || (valorMedioPorDia >= info.faixaValor.final)
        ) {

          resultados.push({
            modo,
            estilo,
            sugestao: info,
          });
        } 
        
      }
    }
  
    if (resultados.length > 0) {
      return res.json(resultados.map(r => ({
        plan: 'PREMIUM',
        sugestao: `Sugerimos o modo de viagem: ${r.modo} com estilo: ${r.estilo} e custo médio por dia de: ${r.sugestao.faixaValor.inicial} até: ${r.sugestao.faixaValor.final}`
      })));
    } 
    return res.status(404).json({ mensagem: 'Nenhum resultado encontrado' });    
};