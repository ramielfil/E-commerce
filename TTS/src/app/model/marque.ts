import { produit } from "./produit";

export interface marque {
    ref_marque: number;
    nom_marque: string;
    name: string;
    imageData: string;
    type: string;
    count?: number; // Ajoutez le champ count
    produits?: produit[];
  }
  