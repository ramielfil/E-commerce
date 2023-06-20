import { produit } from "./produit"

export interface commande {
    ref_commande : number | undefined,
    adresse : string | undefined,
    date_commande : Date | undefined,
    montant : number | undefined,
    statut_commande : string | undefined,
    etat : string | undefined
    ville : string | undefined,
    message : string | undefined,
    qte_value : number [],
    my_user : {
    "id" : number
    "nom" : string
    "prenom":string
    "email":string
    "num_tel":number
},
    code_postal : number | undefined,
    type_depaiement : string | undefined
    produits : produit[]
    
}