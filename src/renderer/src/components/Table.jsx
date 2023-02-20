function Table() {
  return (
    <div className="table-container">
      <div className="container">
        <h2 className="heading-table">جرد يومي</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>
                الاسم <i className="bi bi-person"></i>
              </th>
              <th>
                رقم الهاتف <i className="bi bi-telephone"></i>
              </th>
              <th>
                وصل الحجز <i className="bi bi-clipboard-check"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
            <tr>
              <td>1</td>
              <td>حسين علي خليل</td>
              <td>07806568457</td>
              <td>08764</td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button>السابق</button>
          <button>التالي</button>
        </div>
      </div>
    </div>
  )
}

export default Table
