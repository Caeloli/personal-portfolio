import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ResumePage from "./pages/resume-page/ResumePage";
import AboutPage from "./pages/about-page/AboutPage";
import TechnologyPage from "./pages/technology-page/TechnologyPage";
import EducationPage from "./pages/education-page/EducationPage";
import PortfolioPage from "./pages/portfolio-page/PortfolioPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        /* 
        children: [
            {
                path: '',
                element: <ResumePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'academic',
                element: <EducationPage />
            },
            {
                path: 'technologies',
                element: <TechnologyPage />
            },
            {
                path: 'projects',
                element: <PortfolioPage />
            }
        ]
            */
    }

])

