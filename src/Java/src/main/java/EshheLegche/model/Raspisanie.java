package EshheLegche.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import EshheLegche.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Расписание
 */
@Entity(name = "IISEshheLegcheРасписание")
@Table(schema = "public", name = "Расписание")
public class Raspisanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПервыйПрием")
    private String первыйприем;

    @Column(name = "ВторойПрием")
    private String второйприем;

    @Column(name = "ТретийПрием")
    private String третийприем;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Racion")
    @Convert("Racion")
    @Column(name = "Рацион", length = 16, unique = true, nullable = false)
    private UUID _racionid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Racion", insertable = false, updatable = false)
    private Racion racion;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public Raspisanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПервыйПрием() {
      return первыйприем;
    }

    public void setПервыйПрием(String первыйприем) {
      this.первыйприем = первыйприем;
    }

    public String getВторойПрием() {
      return второйприем;
    }

    public void setВторойПрием(String второйприем) {
      this.второйприем = второйприем;
    }

    public String getТретийПрием() {
      return третийприем;
    }

    public void setТретийПрием(String третийприем) {
      this.третийприем = третийприем;
    }


}