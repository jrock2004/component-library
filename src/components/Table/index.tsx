import React from "react";

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className = "", ...props }, ref) => {
  return (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={`w-full border-collapse ${className}`}
        {...props}
      />
    </div>
  );
});

Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={`border-b border-border ${className}`}
      {...props}
    />
  );
});

TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => {
  return <tbody ref={ref} className={className} {...props} />;
});

TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className = "", ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={`border-b border-border hover:bg-muted/50 transition-colors ${className}`}
      {...props}
    />
  );
});

TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={`px-4 py-3 text-left text-muted-foreground ${className}`}
      {...props}
    />
  );
});

TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => {
  return <td ref={ref} className={`px-4 py-3 ${className}`} {...props} />;
});

TableCell.displayName = "TableCell";
