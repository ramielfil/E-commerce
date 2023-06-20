import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-connexion/admin-login/admin-login.component';
import { AjoutCategotieComponent } from './admin/gerer-categorie/ajout-categotie/ajout-categotie.component';
import { ConsulterCategoriesComponent } from './admin/gerer-categorie/consulter-categories/consulter-categories.component';
import { ModifierCategoriesComponent } from './admin/gerer-categorie/modifier-categories/modifier-categories.component';
import { AjoutClientComponent } from './admin/gerer-clients/ajout-client/ajout-client.component';
import { ConsulerClientsComponent } from './admin/gerer-clients/consuler-clients/consuler-clients.component';
import { ModifierClientsComponent } from './admin/gerer-clients/modifier-clients/modifier-clients.component';
import { CommandeDetailsComponent } from './admin/gerer-commandes/commande-details/commande-details.component';
import { CommandesAccepteesComponent } from './admin/gerer-commandes/commandes-acceptees/commandes-acceptees.component';
import { CommandesAnnuleesComponent } from './admin/gerer-commandes/commandes-annulees/commandes-annulees.component';
import { CommandesEncoursComponent } from './admin/gerer-commandes/commandes-encours/commandes-encours.component';
import { ConsulterCommandesComponent } from './admin/gerer-commandes/consulter-commandes/consulter-commandes.component';
import { AjoutFournisseurComponent } from './admin/gerer-fournisseurs/ajout-fournisseur/ajout-fournisseur.component';
import { ConsulterFournisseursComponent } from './admin/gerer-fournisseurs/consulter-fournisseurs/consulter-fournisseurs.component';
import { ModifierFournisseursComponent } from './admin/gerer-fournisseurs/modifier-fournisseurs/modifier-fournisseurs.component';
import { AjoutLivreurComponent } from './admin/gerer-livreurs/ajout-livreur/ajout-livreur.component';
import { ConsulterLivreursComponent } from './admin/gerer-livreurs/consulter-livreurs/consulter-livreurs.component';
import { ModifierLivreursComponent } from './admin/gerer-livreurs/modifier-livreurs/modifier-livreurs.component';
import { AjoutMarqueComponent } from './admin/gerer-marques/ajout-marque/ajout-marque.component';
import { ConsulterMarquesComponent } from './admin/gerer-marques/consulter-marques/consulter-marques.component';
import { ModifierMarquesComponent } from './admin/gerer-marques/modifier-marques/modifier-marques.component';
import { IndexComponent } from './admin/index/index.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { ApresPaiementComponent } from './client/apres-paiement/apres-paiement.component';
import { FooterComponent } from './client/footer/footer.component';
import { HeaderComponent } from './client/header/header.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { PaiementComponent } from './client/paiement/paiement.component';
import { PanierComponent } from './client/panier/panier.component';
import { ProduitDetailsComponent } from './client/produit-details/produit-details.component';
import { RechercheComponent } from './client/recherche/recherche.component';
import { RegistreComponent } from './client/registre/registre.component';
import { ModifierProduitComponent } from './admin/gerer-produits/modifier-produit/modifier-produit.component';
import { ConsulterProduitComponent } from './admin/gerer-produits/consulter-produit/consulter-produit.component';
import { AjoutProduitComponent } from './admin/gerer-produits/ajout-produit/ajout-produit.component';
import { ModifProfilComponent } from './client/modif-profil/modif-profil.component';
import { LConsulterCommandesComponent } from './livreur/l-consulter-commandes/l-consulter-commandes.component';
import { FactureComponent } from './livreur/facture/facture.component';
import { ModifierProfilComponent } from './admin/modifier-profil/modifier-profil.component';
import { FConsulterProduitsComponent } from './fournisseur/f-consulter-produits/f-consulter-produits.component';
import { FModifierProduitComponent } from './fournisseur/f-modifier-produit/f-modifier-produit.component';
import { ChangerMdpComponent } from './client/changer-mdp/changer-mdp.component';
import { ResetPasswordComponent } from './client/reset-password/reset-password.component';
import { ConfimerCodeComponent } from './client/confimer-code/confimer-code.component';
import { NouveauMotDePasseComponent } from './client/nouveau-mot-de-passe/nouveau-mot-de-passe.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FModifierProfilComponent } from './fournisseur/f-modifier-profil/f-modifier-profil.component';
import { FModifierPasswordComponent } from './fournisseur/f-modifier-password/f-modifier-password.component';
import { LModifierProfilComponent } from './livreur/l-modifier-profil/l-modifier-profil.component';
import { LModifierPasswordComponent } from './livreur/l-modifier-password/l-modifier-password.component';
import { AChangerPasswordComponent } from './admin/a-changer-password/a-changer-password.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { ConsulterContactUsComponent } from './admin/consulter-contact-us/consulter-contact-us.component';
import { MesReservationsComponent } from './client/mes-reservations/mes-reservations.component';
import { CDetailsCommandesComponent } from './client/c-details-commandes/c-details-commandes.component';
// import { AjoutProduitComponent } from './admin/gerer-produits/ajout-produit/ajout-produit.component';

export const appRouteList: Routes = [
{path: '', component: AccueilComponent},
{path: 'accueil', component: AccueilComponent},
{path: 'recherche', component: RechercheComponent},
{path: 'login', component: LoginComponent},
{path: 'header', component: HeaderComponent},
{path: 'details', component: ProduitDetailsComponent},  
{path: 'footer', component: FooterComponent},
{path: 'panier', component: PanierComponent},
{path: 'home',component: HomeComponent},
{path: 'registre',component: RegistreComponent},
{path: 'apres-paiement',component: ApresPaiementComponent},
{path: 'paiement' , component: PaiementComponent},
{path: 'index' , component: IndexComponent},
{path: 'ajout-marque' , component: AjoutMarqueComponent},
{path: 'consulter-marques' , component: ConsulterMarquesComponent},
{path: 'ajout-client' , component: AjoutClientComponent},
{path: 'consulter-clients' , component: ConsulerClientsComponent},
{path: 'consulter-clients/modifier' , component: ModifierClientsComponent},
{path: 'consulter-marques/modifier' , component: ModifierMarquesComponent},
{path: 'ajout-categorie' , component:AjoutCategotieComponent},
{path: 'consulter-categories' , component:ConsulterCategoriesComponent},
{path: 'consulter-categories/modifier' , component:ModifierCategoriesComponent},
{path: 'consulter-commandes' , component:ConsulterCommandesComponent},

{path: 'consulter-commandes/acceptees' , component:CommandesAccepteesComponent},
{path: 'consulter-commandes/annulees' , component:CommandesAnnuleesComponent},
{path: 'consulter-commandes/encours' , component:CommandesEncoursComponent},
{path: 'consulter-commandes/details' , component:CommandeDetailsComponent},
{path: 'ajout-fournisseur' , component:AjoutFournisseurComponent},
{path: 'consulter-fournisseurs' , component:ConsulterFournisseursComponent},
{path: 'consulter-fournisseurs/modifier' , component:ModifierFournisseursComponent},
{path: 'consulter-livreurs/modifier' , component:ModifierLivreursComponent},
{path: 'consulter-livreurs' , component:ConsulterLivreursComponent},
{path: 'ajout-livreur' , component:AjoutLivreurComponent},
{path: 'admin-login' , component:AdminLoginComponent},
{path: 'admin-index' , component:IndexComponent},
{path: 'consulter-produits/modifier' , component:ModifierProduitComponent},
{path: 'consulter-produits' , component:ConsulterProduitComponent},
{path: 'ajout-produit' , component:AjoutProduitComponent},
// {path: 'consulter-commande-l' , component:GererCommandeLComponent},
{path: 'user/modif-profil' , component:ModifProfilComponent},
{path: 'livreur/consulter-commandes' , component:LConsulterCommandesComponent},
{path: 'livreur/facture-client' , component:FactureComponent},
{path: 'a-modifier-profil' , component:ModifierProfilComponent},
{path: 'fournisseur/consulter-produits' , component:FConsulterProduitsComponent},
{path: 'fournisseur/modifier-produits' , component:FModifierProduitComponent},
{path: 'client/modifier-password' , component:ChangerMdpComponent},

{ path: 'reset-password', component: ResetPasswordComponent },
{ path: 'confirmer-code', component: ConfimerCodeComponent},
{ path: 'NouveauMDP', component:  NouveauMotDePasseComponent},
{ path: 'aprespai', component:  ApresPaiementComponent},
{ path: 'f-modifier-profil', component:FModifierProfilComponent},
{ path: 'f-changer-password', component:FModifierPasswordComponent},
{ path: 'l-modifier-profil', component:LModifierProfilComponent},
{ path: 'l-modifier-password', component:LModifierPasswordComponent},
{ path: 'a-modifier-profil', component:ModifierProfilComponent},
{ path: 'a-modifier-password', component:AChangerPasswordComponent},
{ path : 'contact-us' , component:ContactUsComponent},
{ path : 'admin/consulter-contactus' , component:ConsulterContactUsComponent},
{ path : 'mes-reservations' , component:MesReservationsComponent},
{ path : 'client/details-commande' , component:CDetailsCommandesComponent}

];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList),
        CommonModule,
        FormsModule
    ]
})
export class AppRoutingModule {
}