import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <div className="header">
            {/* animation logo */}
           <TypeAnimation 
                sequence={[
                    "Users Table",1000,
                    "Add new User",1000
                ]}
                style={{
                    color: "white",
                    fontSize: "2em",
                    fontWeight: "bold"
                }}
                speed={50}
                repeat={Infinity}
           />
        </div>
    );
}

export default Header;