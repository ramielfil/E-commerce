import { categorie } from './categorie';

export interface produit {
  ref_produit: number;
  nom_produit: string;
  desc_produit: string;
  prix_produit: string;
  quantitue_produit: string;
  name1: string;
  type1: string;
  imageData1: Blob;
  stockage: string;
  garantie: string;
  couleur: string;
  taille_ecran: string;
  ram: string;
  sim: string;
  processeur: string;
  qualite_camera: string;
  graphique: string;
  ref_marque: number; // Updated to number type
  ref_categorie: string;
  quantite: number;
  quantity: number;
  categorie: categorie;

}