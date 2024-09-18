interface headerProps {
    title: string,
    instructions?: string
}

const Header = ({title,instructions} : headerProps) => {
    return (
        <>
              <h1 className='page-title'>{title}</h1>
              {instructions && <h2 className='page-instructions'>{instructions}</h2>}
        </>
    )
}

export default Header