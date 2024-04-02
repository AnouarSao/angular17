import { Routes } from "@angular/router";
import { LayoutComponent } from "./pages/layout/layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { UsersComponent } from "./pages/users/users.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'user/:userId',
                component: UserEditComponent
            },
            {
                path: '',
                component: UsersComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },

]
