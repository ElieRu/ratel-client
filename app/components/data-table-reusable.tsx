"use client"

import { useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SortValue = string | number | null | undefined;
type SortDirection = "ascending" | "descending";

export type DataTableColumn<T> = {
  id: string;
  header: string;
  accessor: (row: T) => SortValue;
  cell?: (row: T) => ReactNode;
  sortable?: boolean;
  className?: string;
};

type DataTableProps<T> = {
  data: readonly T[];
  columns: readonly DataTableColumn<T>[];
  getRowKey: (row: T) => string | number;
  pageSize?: number;
  emptyMessage?: string;
};

function compareValues(left: SortValue, right: SortValue): number {
  if (left == null) return right == null ? 0 : 1;
  if (right == null) return -1;
  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  }
  return String(left).localeCompare(String(right), "fr", {
    numeric: true,
    sensitivity: "base",
  });
}

export function DataTable<T>({
  data,
  columns,
  getRowKey,
  pageSize = 10,
  emptyMessage = "Aucun résultat.",
}: DataTableProps<T>) {
  const [tri, setTri] = useState<{
    columnId: string;
    direction: SortDirection;
  } | null>(null);
  const [page, setPage] = useState(0);

  const lignesTriees = useMemo(() => {
    if (!tri) return [...data];

    const colonne = columns.find(({ id }) => id === tri.columnId);
    if (!colonne) return [...data];

    return data
      .map((row, index) => ({ row, index }))
      .sort((left, right) => {
        const ordre = compareValues(
          colonne.accessor(left.row),
          colonne.accessor(right.row)
        );
        return (tri.direction === "ascending" ? ordre : -ordre)
          || left.index - right.index;
      })
      .map(({ row }) => row);
  }, [columns, data, tri]);

  const taillePage = Math.max(1, Math.floor(pageSize));
  const nombrePages = Math.ceil(lignesTriees.length / taillePage);
  const pageCourante = Math.min(page, Math.max(0, nombrePages - 1));
  const lignesPage = lignesTriees.slice(
    pageCourante * taillePage,
    (pageCourante + 1) * taillePage
  );
  const debut = lignesTriees.length === 0 ? 0 : pageCourante * taillePage + 1;
  const fin = Math.min((pageCourante + 1) * pageSize, lignesTriees.length);

  const changerTri = (columnId: string) => {
    setTri((courant) => ({
      columnId,
      direction:
        courant?.columnId === columnId && courant.direction === "ascending"
          ? "descending"
          : "ascending",
    }));
    setPage(0);
  };

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => {
                const sortDirection =
                  tri?.columnId === column.id ? tri.direction : undefined;
                return (
                  <TableHead
                    key={column.id}
                    scope="col"
                    aria-sort={sortDirection ?? "none"}
                    className={column.className}
                  >
                    {column.sortable === false ? (
                      column.header
                    ) : (
                      <button
                        type="button"
                        onClick={() => changerTri(column.id)}
                        className="inline-flex items-center gap-1 rounded-sm text-left hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {column.header}
                        <span aria-hidden="true">
                          {sortDirection === "ascending"
                            ? "↑"
                            : sortDirection === "descending"
                              ? "↓"
                              : "↕"}
                        </span>
                        <span className="sr-only">
                          {sortDirection
                            ? `, tri ${sortDirection === "ascending" ? "croissant" : "décroissant"}`
                            : ", activer le tri"}
                        </span>
                      </button>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {lignesPage.length > 0 ? (
              lignesPage.map((row) => (
                <TableRow key={getRowKey(row)}>
                  {columns.map((column) => (
                    <TableCell key={column.id} className={column.className}>
                      {column.cell
                        ? column.cell(row)
                        : String(column.accessor(row) ?? "—")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <nav
        aria-label="Pagination du tableau"
        className="flex flex-wrap items-center justify-between gap-3"
      >
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {debut}–{fin} sur {lignesTriees.length}
        </p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPage(pageCourante - 1)}
            disabled={pageCourante === 0}
            aria-label="Page précédente"
          >
            Précédent
          </Button>
          <span aria-current="page" className="text-sm tabular-nums">
            {nombrePages === 0 ? 0 : pageCourante + 1} / {nombrePages}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setPage(pageCourante + 1)}
            disabled={pageCourante >= nombrePages - 1}
            aria-label="Page suivante"
          >
            Suivant
          </Button>
        </div>
      </nav>
    </div>
  );
}
