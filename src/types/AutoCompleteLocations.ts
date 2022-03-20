interface DataSource {
    sourcename: string,
    attribution: string,
    license: string,
    url: string
}

interface Rank {
    importance: number,
    confidence: number,
    confidence_city_level:number,
    match_type: string
}

export interface Geometry {
    type: string,
    coordinates:Array<number> 
}

interface Properties {
    datasource: DataSource,
    city:string,
    county: string,
    state: string,
    postcode: number,
    country: string,
    country_code: string,
    village: string,
    lon: number,
    lat: number,
    address_line2: string,
    category: string,
    result_type: string,
    rank: Rank,
    place_id: string
}

export interface Feature {
        type: string,
        properties: Properties,
        geometry: Geometry,
        bbox: number[]
    }

export interface AutocompleteLocations {
        type: string,
        features: Feature[],
        query: {
            text: string
        }

} 

