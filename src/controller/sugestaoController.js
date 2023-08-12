const sugestao = {
    trabalho: {
        nomadedigital: {            
                lugares: [
                    "11126",
                    "11128",                    
                    "11038",
                    "11039",
                    "11131"
                ],
                acomodacoes: [
                    "19014"
                ],
                eventos: [
                    "14000",	//Event
                    "14001",	//Event > Conference
                    "14002",	//Event > Convention
                    "14003",	//Event > Entertainment Event
                    "14004",	//Event > Entertainment Event > Festival
                    "14005",	//Event > Entertainment Event > Music Festival
                    "14006",	//Event > Entertainment Event > Parade
                    "14007",	//Event > Entertainment Event > Sporting //Event
                    "14008",	//Event > Line
                    "14009",	//Event > Marketplace
                    "14010",	//Event > Marketplace > Christmas Market
                    "14011",	//Event > Marketplace > Stoop Sale
                    "14012",	//Event > Marketplace > Street Fair
                    "14013",	//Event > Marketplace > Street Food Gathering
                    "14014",	//Event > Marketplace > Trade Fair
                    "14015",	//Event > Other Event
                ],
                experiencias: [
                    "Participar de workshops de tecnologia",
                    "Explorar espaços de coworking locais",
                    "Participar de atividades de networking"
                ],
                alimentacao: [
                    "13052",	//Dining and Drinking > Food Court
                    "13053",	//Dining and Drinking > Food Stand
                    "13054",	//Dining and Drinking > Food Truck
                    "13134",	//Dining and Drinking > Restaurant > Comfort Food Restaurant
                    "13145",	//Dining and Drinking > Restaurant > Fast Food Restaurant
                    "13338",	//Dining and Drinking > Restaurant > Seafood Restaurant
                    "13344",	//Dining and Drinking > Restaurant > Southern Food Restaurant
                ],
                happyHour: [
                    "Confraternização em bares com Wi-Fi",
                    "Participação em eventos sociais de coworking"
                ],
                profissoes: [
                    "Profissionais de TI",
                    "Designers",
                    "Redatores"
                ],
                passeiosGuiados: [
                    "Tours tecnológicos pela cidade",
                    "Exploração de bairros com foco em negócios"
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
                "Teatros"
            ],
            acomodacoes: [
                "Hotéis tradicionais",
                "Pousadas charmosas",
                "Casas de hóspedes locais"
            ],
            eventos: [
                "Festivais culturais",
                "Exposições de arte",
                "Palestras"
            ],
            experiencias: [
                "Visitas guiadas a monumentos históricos",
                "Tours de arte"
            ],
            alimentacao: [
                "Experimentar pratos tradicionais",
                "Jantar em restaurantes locais",
                "Degustações"
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
            passeiosGuiados: [
                "Walking tours pela cidade",
                "Tours de arte e cultura"
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
                "Florestas"
            ],
            acomodacoes: [
                "Eco lodges",
                "Acampamentos sustentáveis"
            ],
            eventos: [
                "Passeios de observação de aves",
                "Safáris",
                "Palestras ambientais"
            ],
            experiencias: [
                "Trilhas interpretativas",
                "Safáris fotográficos",
                "Passeios de bicicleta ecológicos"
            ],
            alimentacao: [
                "Refeições frescas e orgânicas",
                "Pratos locais"
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
            passeiosGuiados: [
                "Guias de observação de aves",
                "Guias de safári"
            ],
            faixaEtaria: { inicial: 25, final: 55 },
            faixaValor: { inicial: 70, final: 180 }
        },
        viagemdeluxo: {
            lugares: [
                "Destinos exclusivos",
                "Resorts de luxo"
            ],
            acomodacoes: [
                "Hotéis de cinco estrelas",
                "Vilas privativas"
            ],
            eventos: [
                "Jantares gourmet",
                "Festas exclusivas",
                "Eventos de moda"
            ],
            experiencias: [
                "Passeios de iate com guia",
                "Excursões VIP"
            ],
            alimentacao: [
                "Jantares sofisticados",
                "Experiências gastronômicas"
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
            passeiosGuiados: [
                "Passeios de iate privados",
                "Tours personalizados"
            ],
            faixaEtaria: { inicial: 30, final: 65 },
            faixaValor: { inicial: 200, final: 500 }
        },
        mochilao: {
            lugares: [
                "Destinos econômicos",
                "Cidades históricas"
            ],
            acomodacoes: [
                "Albergues",
                "Hostels",
                "Hospedagens econômicas"
            ],
            eventos: [
                "Encontros de mochileiros",
                "Festivais de música",
                "Oficinas criativas"
            ],
            experiencias: [
                "Passeios a pé por bairros locais",
                "Tours alternativos"
            ],
            alimentacao: [
                "Comidas de rua",
                "Cozinhar refeições simples",
                "Compartilhar refeições"
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
            passeiosGuiados: [
                "Passeios urbanos a pé",
                "Tours culturais autênticos"
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
    return null;
}

searchPlaceFourSquare = async (ll, categories) => {
    const { data } = await sdk.placeSearch({
        ll: '-23.5583%2C-46.6415',
        categories,
        sort: 'RATING',
        session_token: 'sCmRnJAEgBjNPU4WZqb7jDGgLESTXpsG'
    });

    return await Promise.all(
        data.results.map(async (d, index) => {
            const { fsq_id, location, name } = d;
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

buscarLugaresPorCategoria = async (modo, estilo, ll, tag) =>{    
    const categories = sugestaoPorCategoria(modo, estilo, tag).join(",");      
    return  await searchPlaceFourSquare(ll, categories);
}

exports.sugerir = (req, res) => {
    const { modo, estilo} = req.params;        
    const resultado = sugestao[modo][estilo];    
    if (resultado) {
        return res.json(resultado);
    } 
    return res.status(404).json({ id, message: "não encontrado." });
};

exports.happyHour = (req, res) => {
    const { modo, estilo} = req.params;        
    const resultado = sugestaoPorCategoria(modo, estilo, "happyHour");
    if (resultado) {
        return res.json(resultado);
    } 
    return res.status(404).json({ id, message: "não encontrado." });
};

exports.lugares = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "lugares";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
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
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "acomodacoes";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
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
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "eventos";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};


exports.alimentacao = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "alimentacao";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.experiencias = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "experiencias";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.passeiosGuiados = async (req, res) => {
    let { modo, estilo, ll, tag} = req.params;
    ll = ll || "-23.5583%2C-46.6415";    
    tag = tag || "passeioGuiado";
    try {                
        placesWithPhotos = await buscarLugaresPorCategoria(modo, estilo, ll, tag);        
        if(!placesWithPhotos || !placesWithPhotos.length){
            return res.status(404).json({modo, estilo, ll, message: "não encontrado." });
        }
        return res.json(placesWithPhotos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.filtrar = (req, res) => {
    const { profissao, idade, valorMedio } = req.query;
    const resultados = [];

    if(Number.isNaN(idade) || Number.isNaN(valorMedio)){
        return res.status(400).json({ mensagem: 'idade e valorMedio devem ser números' });    
    }   
    
    for (const modo in sugestao) {
      for (const estilo in sugestao[modo]) {        
        const info = sugestao[modo][estilo];                  
        info.profissoes = info.profissoes.map(p => p.toLowerCase());        
        if (
            info.profissoes.includes(profissao?.toLowerCase())
            || (idade >= info.faixaEtaria.inicial && idade <= info.faixaEtaria.final)
            || (valorMedio >= info.faixaValor.inicial && valorMedio <= info.faixaValor.final)
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
      return res.json(resultados);
    } 
    return res.status(404).json({ mensagem: 'Nenhum resultado encontrado' });    
};