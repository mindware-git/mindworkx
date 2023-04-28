import Link from 'next/link';

export default function HomePage() {
    return (<div>Welcome to Mind Work<br />
        this is look simple but getting better<br />
        If you are employee go to <Link href="/employee">employee page</Link>. <br />
        If you are employer go to employer page.</div>);
}