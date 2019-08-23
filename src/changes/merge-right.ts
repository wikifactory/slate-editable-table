import { Editor } from 'slate';

import { TableMap } from '../table-map';
import { Option } from '../option';
import { mergeCells } from './merge';

export function mergeRight(opts: Option, editor: Editor) {
  const currentCell = TableMap.currentCell(editor);
  if (!currentCell) return;
  const { key } = currentCell;
  const table = TableMap.create(editor);
  if (!table) return;
  if (table.isLastColumn(key)) return;

  const current = table.findCellBy(key);
  const right = table.getRight(key);

  if (!right || !current) return;

  mergeCells(editor, current.key, right.key, opts);
}