import { useRouter } from "next/navigation"

  export function Menu() {
    const navigate = useRouter();

    return (
      <nav
          className={"flex items-center space-x-4 lg:space-x-6 mx-6"}
        >
          <button
            onClick={() => navigate.push("/dashboard")}
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            HomeQuest
          </button>
          <button
            onClick={() => navigate.push("/about")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </button>
      </nav>
    )
  }