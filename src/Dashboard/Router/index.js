import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Dashboard from '../../pages/dashboard';
import ProfileSetting from '../../pages/profilesetting';
import Agents from '../../pages/agents';
import PropertyManagement from '../../pages/propertyManagement';
import PostListing from '../../pages/postListing';
import CompanySetting from '../../pages/companySetting';
import NotFound from '../../utils/notFound';
// import { AdminRoutes, ProtectedRoutes, AuthenticatedRoutes } from '../../utils/ProtectedRoutes';

const UserRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/dashboard" element={<ProtectedRoutes component={Dashboard} />} />
                <Route path="/dashboard/profile" element={<AuthenticatedRoutes component={UserProfile} />} />
                <Route path="/dashboard/properties" element={<ProtectedRoutes component={UserProperties} />} />
                <Route path="/dashboard/users" element={<AuthenticatedRoutes component={UsersList} />} />
                <Route path="/dashboard/roles" element={<AuthenticatedRoutes component={RolesList} />} />
                <Route path="/dashboard/addproperty" element={<ProtectedRoutes component={UserAddProperty} />} />
                <Route path="'/dashboard/paymentmethod" element={<ProtectedRoutes component={UserPaymentMethod} />} />
                <Route path="/dashboard/invoice" element={<ProtectedRoutes component={UserInvoice} />} />
                <Route path="/dashboard/societies" element={<ProtectedRoutes component={AllSocieties} />} />
                <Route path="/dashboard/society/:id" element={<ProtectedRoutes component={SocietyDetails} />} />
                <Route path="/dashboard/blocks" element={<ProtectedRoutes component={AllBlocks} />} />
                <Route path="/dashboard/phases" element={<ProtectedRoutes component={AllPhases} />} />
                <Route path="/dashboard/appointment/:id" element={<AuthenticatedRoutes component={Appointments} />} />
                <Route path="/dashboard/chat" element={<AuthenticatedRoutes component={Chat} />} />
                <Route path="/dashboard/events/:id" element={<AuthenticatedRoutes component={EventScheduler} />} />
                <Route path="/dashboard/changepassword" element={<AuthenticatedRoutes component={UserChangePassword} />} />
                <Route path="/dashboard/notfound" element={<NotFound />} />
                <Route path="/dashboard/whatsapp" element={<WhatsAppPage />} />
                <Route path="*" element={<Navigate replace to="/dashboard/notfound" />} /> */}
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/propertymanagement" element={<PropertyManagement />} />customprofilebuilder
                <Route path="/customprofilebuilder" element={<NotFound />} />
                <Route path="/postlisting" element={<PostListing />} />
                <Route path="/profilesettings" element={<ProfileSetting />} />
                <Route path="/companysettings" element={<CompanySetting />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="*" element={<Navigate replace to="/notfound" />} />


                {/* <Route path="/dashboard" element={<AuthenticatedRoutes component={Dashboard} />} />
                <Route path="/propertymanagement" element={<AuthenticatedRoutes component={PropertyManagement} />} />
                <Route path="/postlisting" element={<AuthenticatedRoutes component={PostListing} />} />
                <Route path="/profilesettings" element={<AuthenticatedRoutes component={ProfileSetting} />} />
                <Route path="/companysettings" element={<AuthenticatedRoutes component={CompanySetting} />} />
                <Route path="/agents" element={<AuthenticatedRoutes component={Agents} />} /> */}

            </Routes>
        </>);
};

export default UserRouter;
