import { Button } from "@/components/ui/button"
import { VscSymbolProperty } from "react-icons/vsc"

export function EmptyPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <VscSymbolProperty className="text-4xl"/>
        <h3 className="mt-4 text-lg font-semibold">No Properties added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          There are no Properties. Add one below.
        </p>
            <Button size="sm" className="relative">
              Add Property
            </Button>
      </div>
    </div>
  )
}