import Link from "next/link"

  export function Menu() {
    return (
      <nav
          className={"flex items-center space-x-4 lg:space-x-6 mx-6"}
        >
          <Link
            href=""
            className="text-sm font-bold transition-colors hover:text-primary"
          >
            HomeQuest
          </Link>
          <Link
            href=""
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
      </nav>
    )
  }