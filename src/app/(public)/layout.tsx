export default function LayoutPublic({ children}: { children: React.ReactNode}) {
    return (
        <main style={{background: '#000', color: '#fff'}}>{children}</main>
    )
}