import Layout from "../Components/Layout";
import LoginForm from "../Components/LoginForm";
import { authInitialProps } from "../lib/auth";

export default function Login(props) {
    return (
        <Layout title="Login" {...props}>
            <LoginForm />
        </Layout>
    );
}

Login.getInitialProps = authInitialProps();
