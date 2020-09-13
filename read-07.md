# HTML < table> Tag

Example
A simple HTML table, containing two columns and two rows:

                <table>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
                </table>

Definition and Usage
The < table> tag defines an HTML table.

An HTML table consists of one < table> element and one or more < tr>, < th>, and < td> elements.

The < tr> element defines a table row, the < th> element defines a table header, and the < td> element defines a table cell.

## Default CSS Settings

Most browsers will display the < table> element with the following default values:

Example
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}