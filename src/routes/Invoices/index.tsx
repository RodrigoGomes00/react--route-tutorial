import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import './style.css';
import QueryLink from "../../components/QueryLink";

export default function Invoices() {

    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();


    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderRight: "solid 1px", padding: "1rem" }} >

                <div>
                    <input
                        value={searchParams.get("name") || ""}
                        onChange={(event) => {
                            const name = event.target.value;
                            if (name) {
                                setSearchParams({ name });
                            } else {
                                setSearchParams({});
                            }
                        }}
                    />
                </div>


                {invoices

                .filter((invoice) => {
                    const name = searchParams.get("name");
                    if (!name) {
                        return true;
                    }
                    const invoiceName = invoice.name.toLowerCase();
                    return invoiceName.startsWith(name.toLowerCase());
                  })

                .map((invoice) => (
                    <QueryLink
                        className={({ isActive }: any) => isActive ? "nav-red" : "nav-blue"}
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </QueryLink>
                ))}
            </nav>

            <Outlet />
        </div>
    );
}