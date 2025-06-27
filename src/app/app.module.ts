import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Website/header/header.component';
import { FooterComponent } from './Website/footer/footer.component';
import { HomeComponent } from './Website/home/home.component';
import { AboutUsComponent } from './Website/about-us/about-us.component';
import { AimsAndObjectivesComponent } from './Website/aims-and-objectives/aims-and-objectives.component';
import { AboutSchoolComponent } from './Website/about-school/about-school.component';
import { ContactUsComponent } from './Website/contact-us/contact-us.component';
import { BreadcrumbsComponent } from './Website/breadcrumbs/breadcrumbs.component';
import { ApiServiceService } from './Services/api-service.service';
import { BoardOfMemberComponent } from './Website/board-of-member/board-of-member.component';
import { FormerPrincipalComponent } from './Website/former-principal/former-principal.component';
import { GalleryComponent } from './Website/gallery/gallery.component';
import { FaqComponent } from './Website/faq/faq.component';
import { WallOfFameComponent } from './Website/wall-of-fame/wall-of-fame.component';
import { RegistrationComponent } from './Alumni/registration/registration.component';
import { LoginComponent } from './Alumni/login/login.component';
import { DashboardComponent } from './Alumni/dashboard/dashboard.component';
import { MembershipComponent } from './Website/membership/membership.component';
import { EnquiryFormComponent } from './Website/enquiry-form/enquiry-form.component';
import { ForgotPasswordComponent } from './Alumni/forgot-password/forgot-password.component';
import { CompletePurchaseComponent } from './Alumni/Component/complete-purchase/complete-purchase.component';
import { DashHeaderComponent } from './Alumni/App/dash-header/dash-header.component';
import { DashFooterComponent } from './Alumni/App/dash-footer/dash-footer.component';
import { AppGalleryComponent } from './Alumni/App/app-gallery/app-gallery.component';
import { AppEventsComponent } from './Alumni/App/app-events/app-events.component';
import { AppWallOfFameComponent } from './Alumni/App/app-wall-of-fame/app-wall-of-fame.component';
import { AppNewsComponent } from './Alumni/App/app-news/app-news.component';
import { AppProfileComponent } from './Alumni/App/app-profile/app-profile.component';
import { AppSuggestionsComponent } from './Alumni/App/app-suggestions/app-suggestions.component';
import { AppBatchMateComponent } from './Alumni/App/app-batch-mate/app-batch-mate.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AppGroupPhotoComponent } from './Alumni/App/app-group-photo/app-group-photo.component';
import { AppVotingComponent } from './Alumni/App/app-voting/app-voting.component';
import { PrivacyPolicyComponent } from './Website/privacy-policy/privacy-policy.component';
import { RefundAndCancellationPolicyComponent } from './Website/refund-and-cancellation-policy/refund-and-cancellation-policy.component';
import { TermsAndConditionsComponent } from './Website/terms-and-conditions/terms-and-conditions.component';
import { AppMembershipCardComponent } from './Alumni/App/app-membership-card/app-membership-card.component';
import { FeedbackFormComponent } from './Alumni/Component/feedback-form/feedback-form.component';
import { MediaGalleryComponent } from './Website/media-gallery/media-gallery.component';
import { AppMediaGalleryComponent } from './Alumni/App/app-media-gallery/app-media-gallery.component';
import { AppClassPhotoComponent } from './Alumni/App/app-class-photo/app-class-photo.component';
import { ClassPhotoComponent } from './Website/class-photo/class-photo.component';
import { AppPurchaseMembershipComponent } from './Alumni/App/app-purchase-membership/app-purchase-membership.component';
import { AppInvoiceComponent } from './Alumni/App/app-invoice/app-invoice.component';
import { SiteMapComponent } from './Website/site-map/site-map.component';
import { ScreenLoaderComponent } from './Alumni/Component/screen-loader/screen-loader.component';
import { DownloadDocsComponent } from './Website/download-docs/download-docs.component';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    AimsAndObjectivesComponent,
    AboutSchoolComponent,
    ContactUsComponent,
    BreadcrumbsComponent,
    BoardOfMemberComponent,
    FormerPrincipalComponent,
    GalleryComponent,
    FaqComponent,
    WallOfFameComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    MembershipComponent,
    EnquiryFormComponent,
    ForgotPasswordComponent,
    CompletePurchaseComponent,
    DashHeaderComponent,
    DashFooterComponent,
    AppGalleryComponent,
    AppEventsComponent,
    AppWallOfFameComponent,
    AppNewsComponent,
    AppProfileComponent,
    AppSuggestionsComponent,
    AppBatchMateComponent,
    AppGroupPhotoComponent,
    AppVotingComponent,
    PrivacyPolicyComponent,
    RefundAndCancellationPolicyComponent,
    TermsAndConditionsComponent,
    AppMembershipCardComponent,
    FeedbackFormComponent,
    MediaGalleryComponent,
    AppMediaGalleryComponent,
    AppClassPhotoComponent,
    ClassPhotoComponent,
    AppPurchaseMembershipComponent,
    AppInvoiceComponent,
    SiteMapComponent,
    ScreenLoaderComponent,
    DownloadDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule.withConfig(notifierDefaultOptions),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
