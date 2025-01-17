import { formatDate } from "../../../utils/formatDate";
import { TableContainer, TableStyle, Type } from "./styled";
import { sortMovements } from "../../../utils/sortMovements";

const ReporteTable = (props) => {
  const { movements } = props;

  const sortedMovements = sortMovements(movements);

  const { shortDate, getHour } = formatDate();

  const modifyMov = (movements) => {
    let previousBalance = 0;
    const modifyMovements = movements.reverse().map((movement) => {
      const modifiedMovement = { ...movement };
      if (movement.tipo === "entrada") {
        previousBalance += modifiedMovement.monto;
        modifiedMovement.saldoAnterior =
          previousBalance - modifiedMovement.monto;
        modifiedMovement.saldoActual = previousBalance;
      } else {
        previousBalance -= modifiedMovement.monto;
        modifiedMovement.saldoAnterior =
          previousBalance + modifiedMovement.monto;
        modifiedMovement.saldoActual = previousBalance;
      }
      return modifiedMovement;
    });
    return modifyMovements;
  };

  return (
    <>
      {
        <TableContainer>
          <TableStyle>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Rubro</th>
                <th>Sub rubro</th>
                <th>Detalle</th>
                <th>Monto</th>
                <th>Moneda</th>
                <th>Banco</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Saldo Anterior</th>
                <th>Saldo Actual</th>
              </tr>
            </thead>
            <tbody>
              {modifyMov(sortedMovements).map((movement) => {
                const {
                  _id,
                  tipo,
                  rubro,
                  subRubro,
                  detalle,
                  moneda,
                  banco,
                  createdAt,
                  monto,
                  saldoActual,
                  saldoAnterior,
                } = movement;

                return (
                  <tr key={`tr-${_id}`}>
                    <Type type={tipo}>{tipo}</Type>
                    <td>{rubro}</td>
                    <td>{subRubro}</td>
                    <td>{detalle}</td>
                    <td>{monto}</td>
                    <td>{moneda}</td>
                    <td>{banco}</td>
                    <td>{shortDate(createdAt)}</td>
                    <td>{getHour(createdAt)}</td>
                    <td>{saldoAnterior}</td>
                    <td>{saldoActual}</td>
                  </tr>
                );
              })}
            </tbody>
          </TableStyle>
        </TableContainer>
      }
    </>
  );
};

export default ReporteTable;
