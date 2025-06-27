import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/auth.guard';
import { MemberGuard } from './Services/member.guard';
import { AppBatchMateComponent } from './Alumni/App/app-batch-mate/app-batch-mate.component';
import { AppEventsComponent } from './Alumni/App/app-events/app-events.component';
import { AppGalleryComponent } from './Alumni/App/app-gallery/app-gallery.component';
import { AppGroupPhotoComponent } from './Alumni/App/app-group-photo/app-group-photo.component';
import { AppMembershipCardComponent } from './Alumni/App/app-membership-card/app-membership-card.component';
import { AppNewsComponent } from './Alumni/App/app-news/app-news.component';
import { AppProfileComponent } from './Alumni/App/app-profile/app-profile.component';
import { AppSuggestionsComponent } from './Alumni/App/app-suggestions/app-suggestions.component';
import { AppVotingComponent } from './Alumni/App/app-voting/app-voting.component';
import { AppWallOfFameComponent } from './Alumni/App/app-wall-of-fame/app-wall-of-fame.component';
import { CompletePurchaseComponent } from './Alumni/Component/complete-purchase/complete-purchase.component';
import { DashboardComponent } from './Alumni/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Alumni/forgot-password/forgot-password.component';
import { LoginComponent } from './Alumni/login/login.component';
import { RegistrationComponent } from './Alumni/registration/registration.component';
import { AboutSchoolComponent } from './Website/about-school/about-school.component';
import { AboutUsComponent } from './Website/about-us/about-us.component';
import { AimsAndObjectivesComponent } from './Website/aims-and-objectives/aims-and-objectives.component';
import { BoardOfMemberComponent } from './Website/board-of-member/board-of-member.component';
import { ContactUsComponent } from './Website/contact-us/contact-us.component';
import { FaqComponent } from './Website/faq/faq.component';
import { FormerPrincipalComponent } from './Website/former-principal/former-principal.component';
import { GalleryComponent } from './Website/gallery/gallery.component';
import { HomeComponent } from './Website/home/home.component';
import { MembershipComponent } from './Website/membership/membership.component';
import { PrivacyPolicyComponent } from './Website/privacy-policy/privacy-policy.component';
import { RefundAndCancellationPolicyComponent } from './Website/refund-and-cancellation-policy/refund-and-cancellation-policy.component';
import { TermsAndConditionsComponent } from './Website/terms-and-conditions/terms-and-conditions.component';
import { WallOfFameComponent } from './Website/wall-of-fame/wall-of-fame.component';
import { MediaGalleryComponent } from './Website/media-gallery/media-gallery.component';
import { AppMediaGalleryComponent } from './Alumni/App/app-media-gallery/app-media-gallery.component';
import { AppClassPhotoComponent } from './Alumni/App/app-class-photo/app-class-photo.component';
import { ClassPhotoComponent } from './Website/class-photo/class-photo.component';
import { AppPurchaseMembershipComponent } from './Alumni/App/app-purchase-membership/app-purchase-membership.component';
import { AppInvoiceComponent } from './Alumni/App/app-invoice/app-invoice.component';
import { SiteMapComponent } from './Website/site-map/site-map.component';
import { DownloadDocsComponent } from './Website/download-docs/download-docs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'know-us',
    component: AboutUsComponent
  },
  {
    path: 'aims-and-objectives',
    component: AimsAndObjectivesComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'board-of-member',
    component: BoardOfMemberComponent
  },
  {
    path: 'about-school',
    component: AboutSchoolComponent
  },
  {
    path: 'former-principal',
    component: FormerPrincipalComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'gallery/:album_id',
    component: GalleryComponent
  },
  {
    path: 'media-gallery',
    component: MediaGalleryComponent
  },
  {
    path: 'class-photo',
    component: ClassPhotoComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'wall-of-fame',
    component: WallOfFameComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'refund-and-cancellation-policy',
    component: RefundAndCancellationPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'site-map',
    component: SiteMapComponent
  },
  {
    path: 'download-docs/:verify_id/:type',
    component: DownloadDocsComponent
  },

  //Alumni Login
  {
    path: 'alumni',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'complete-purchase/:id',
        component: CompletePurchaseComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gallery',
        component: AppGalleryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gallery/:album_id',
        component: AppGalleryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'media-gallery',
        component: AppMediaGalleryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'events',
        component: AppEventsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'wall-of-fame',
        component: AppWallOfFameComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'news',
        component: AppNewsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: AppProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'suggestion',
        component: AppSuggestionsComponent,
        canActivate: [AuthGuard, MemberGuard]
      },
      {
        path: 'batch-mate',
        component: AppBatchMateComponent,
        canActivate: [AuthGuard, MemberGuard]
      },
      {
        path: 'share-photo',
        component: AppGroupPhotoComponent,
        canActivate: [AuthGuard, MemberGuard]
      },
      {
        path: 'class-photo',
        component: AppClassPhotoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'voting',
        component: AppVotingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'membership-card',
        component: AppMembershipCardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'purchase-membership',
        component: AppPurchaseMembershipComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'invoice/:order_id',
        component: AppInvoiceComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
