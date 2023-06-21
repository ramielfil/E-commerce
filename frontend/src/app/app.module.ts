import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { RegistreComponent } from './client/registre/registre.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { PanierComponent } from './client/panier/panier.component';
import { ProduitDetailsComponent } from './client/produit-details/produit-details.component';
import { RechercheComponent } from './client/recherche/recherche.component';
import { ApresPaiementComponent } from './client/apres-paiement/apres-paiement.component';
import { PaiementComponent } from './client/paiement/paiement.component';
import { IndexComponent } from './admin/index/index.component';
import { ANavbarComponent } from './admin/admin-components/a-navbar/a-navbar.component';
import { ASidebarComponent } from './admin/admin-components/a-sidebar/a-sidebar.component';
import { AFooterComponent } from './admin/admin-components/a-footer/a-footer.component';
import { AjoutMarqueComponent } from './admin/gerer-marques/ajout-marque/ajout-marque.component';
import { ConsulterMarquesComponent } from './admin/gerer-marques/consulter-marques/consulter-marques.component';
import { AjoutClientComponent } from './admin/gerer-clients/ajout-client/ajout-client.component';
import { ConsulerClientsComponent } from './admin/gerer-clients/consuler-clients/consuler-clients.component';
import { ModifierClientsComponent } from './admin/gerer-clients/modifier-clients/modifier-clients.component';
import { ModifierMarquesComponent } from './admin/gerer-marques/modifier-marques/modifier-marques.component';
import { ConsulterCategoriesComponent } from './admin/gerer-categorie/consulter-categories/consulter-categories.component';
import { ModifierCategoriesComponent } from './admin/gerer-categorie/modifier-categories/modifier-categories.component';
import { AjoutCategotieComponent } from './admin/gerer-categorie/ajout-categotie/ajout-categotie.component';
import { ConsulterCommandesComponent } from './admin/gerer-commandes/consulter-commandes/consulter-commandes.component';
import { CommandesAccepteesComponent } from './admin/gerer-commandes/commandes-acceptees/commandes-acceptees.component';
import { CommandesAnnuleesComponent } from './admin/gerer-commandes/commandes-annulees/commandes-annulees.component';
import { CommandesEncoursComponent } from './admin/gerer-commandes/commandes-encours/commandes-encours.component';
import { CommandeDetailsComponent } from './admin/gerer-commandes/commande-details/commande-details.component';
import { AjoutFournisseurComponent } from './admin/gerer-fournisseurs/ajout-fournisseur/ajout-fournisseur.component';
import { ConsulterFournisseursComponent } from './admin/gerer-fournisseurs/consulter-fournisseurs/consulter-fournisseurs.component';
import { ModifierFournisseursComponent } from './admin/gerer-fournisseurs/modifier-fournisseurs/modifier-fournisseurs.component';
import { AjoutLivreurComponent } from './admin/gerer-livreurs/ajout-livreur/ajout-livreur.component';
import { ConsulterLivreursComponent } from './admin/gerer-livreurs/consulter-livreurs/consulter-livreurs.component';
import { ModifierLivreursComponent } from './admin/gerer-livreurs/modifier-livreurs/modifier-livreurs.component';
import { AdminLoginComponent } from './admin/admin-connexion/admin-login/admin-login.component';
import { FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AjoutProduitComponent } from './admin/gerer-produits/ajout-produit/ajout-produit.component';
import { ConsulterProduitComponent } from './admin/gerer-produits/consulter-produit/consulter-produit.component';
import { ModifierProduitComponent } from './admin/gerer-produits/modifier-produit/modifier-produit.component';
import { ModifProfilComponent } from './client/modif-profil/modif-profil.component';
import { Ng5SliderModule } from 'ng5-slider';
import { LConsulterCommandesComponent } from './livreur/l-consulter-commandes/l-consulter-commandes.component';
import { FactureComponent } from './livreur/facture/facture.component';
import { ModifierProfilComponent } from './admin/modifier-profil/modifier-profil.component';
import { FConsulterProduitsComponent } from './fournisseur/f-consulter-produits/f-consulter-produits.component';
import { FModifierProduitComponent } from './fournisseur/f-modifier-produit/f-modifier-produit.component';
import { ChangerMdpComponent } from './client/changer-mdp/changer-mdp.component';
import { ConfimerCodeComponent } from './client/confimer-code/confimer-code.component';
import { NouveauMotDePasseComponent } from './client/nouveau-mot-de-passe/nouveau-mot-de-passe.component';
import { ResetPasswordComponent } from './client/reset-password/reset-password.component';
import { MesReservationsComponent } from './client/mes-reservations/mes-reservations.component';
import { FModifierProfilComponent } from './fournisseur/f-modifier-profil/f-modifier-profil.component';
import { FModifierPasswordComponent } from './fournisseur/f-modifier-password/f-modifier-password.component';
import { LModifierPasswordComponent } from './livreur/l-modifier-password/l-modifier-password.component';
import { LModifierProfilComponent } from './livreur/l-modifier-profil/l-modifier-profil.component';
import { AChangerPasswordComponent } from './admin/a-changer-password/a-changer-password.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { ConsulterContactUsComponent } from './admin/consulter-contact-us/consulter-contact-us.component';
import { CDetailsCommandesComponent } from './client/c-details-commandes/c-details-commandes.component';

// import { GererCommandeLComponent } from './livreur/gerer-commande-l/gerer-commande-l.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistreComponent,
    AccueilComponent,
    PanierComponent,
    ProduitDetailsComponent,
    RechercheComponent,
    ApresPaiementComponent,
    PaiementComponent,
    IndexComponent,
    ANavbarComponent,
    AFooterComponent,
    ASidebarComponent,
    AjoutMarqueComponent,
    ConsulterMarquesComponent,
    AjoutClientComponent,
    ConsulerClientsComponent,
    ModifierClientsComponent,
    ModifierMarquesComponent,
    AjoutCategotieComponent,
    ConsulterCategoriesComponent,
    ModifierCategoriesComponent,
    ConsulterCommandesComponent,
    CommandesAccepteesComponent,
    CommandesAnnuleesComponent,
    CommandesEncoursComponent,
    CommandeDetailsComponent,
    AjoutFournisseurComponent,
    ConsulterFournisseursComponent,
    ModifierFournisseursComponent,
    AjoutLivreurComponent,
    ConsulterLivreursComponent,
    ModifierLivreursComponent,
    AdminLoginComponent,
    AjoutProduitComponent,
    ConsulterProduitComponent,
    ModifierProduitComponent,
    ModifProfilComponent,
    LConsulterCommandesComponent,
    FactureComponent,
    ModifierProfilComponent,
    FConsulterProduitsComponent,
    FModifierProduitComponent,
    ChangerMdpComponent,
    ConfimerCodeComponent,
    NouveauMotDePasseComponent,
    ResetPasswordComponent,
    MesReservationsComponent,
    FModifierProfilComponent,
    FModifierPasswordComponent,
    LModifierPasswordComponent,
    LModifierProfilComponent,
    AChangerPasswordComponent,
    ContactUsComponent,
    ConsulterContactUsComponent,
    CDetailsCommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    MdbCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
