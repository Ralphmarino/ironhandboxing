import { visit } from 'unist-util-visit';

/**
 * Wraps every markdown table in <div class="tablewrap">.
 *
 * The wrapper is what scrolls. A table given a sensible min-width would
 * otherwise either overflow the page on a phone or, worse, squeeze its columns
 * until every cell is two words per line and the table stops being readable at
 * all. Putting overflow-x on a wrapper lets the table keep its shape and slide
 * sideways instead.
 *
 * It also gives the border and the rounded corners something to hang off:
 * border-radius on a table with border-collapse: collapse does not clip the
 * cells, so the corners come out square.
 */
export default function rehypeTableWrap() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index === null) return;
      if (parent.type === 'element' && parent.properties?.className?.includes?.('tablewrap')) return;

      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['tablewrap'],
          // Scrollable regions have to be reachable by keyboard, otherwise a
          // keyboard-only visitor cannot see the columns that are off-screen.
          tabindex: '0',
          role: 'region',
        },
        children: [node],
      };
    });
  };
}
