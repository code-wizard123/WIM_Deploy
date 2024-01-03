import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "../Components/AdminPage/theme";
import NewsPage from '../Components/AdminPage/scenes/news/News';
import Layout from "../Components/AdminPage/scenes/layout";
import Dashboard from "../Components/AdminPage/scenes/dashboard";
import Slider from "../Components/AdminPage/scenes/Media/Slider";
import Customers from "../Components/AdminPage/scenes/customers";
import Committee from "../Components/AdminPage/scenes/committee";
import Transactions from "../Components/AdminPage/scenes/transactions";
import Geography from "../Components/AdminPage/scenes/geography";
import Admin from "../Components/AdminPage/scenes/admin";

const AdminPage = () => {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="media" element={<Slider />} />
                        <Route path="news" element={<NewsPage />} />
                        <Route path="visits" element={<Customers />} />
                        <Route path="committee" element={<Committee />} />
                        <Route path="members" element={<Customers />} />
                        <Route path="transactions" element={<Transactions />} />
                        <Route path="geography" element={<Geography />} />
                        <Route path="admin" element={<Admin />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default AdminPage