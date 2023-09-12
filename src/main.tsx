import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Expenses from './routes/Expenses/'
import Invoices from './routes/Invoices/'
import NotFound from './routes/NotFound/index.tsx'
import Invoice from './routes/Invoices/invoice/index.tsx'
import InvoicesIndex from './routes/Invoices/InvoicesIndex/index.tsx'
import HomePage from './routes/HomePage/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<HomePage />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<InvoicesIndex />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route >
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,

)
