const formatDate = (date: any) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }
  
export default formatDate;
  